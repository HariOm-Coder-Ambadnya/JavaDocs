import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)
  const labelRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    const label  = labelRef.current
    if (!cursor || !ring || !label) return

    const xSetterCursor = gsap.quickSetter(cursor, "x", "px")
    const ySetterCursor = gsap.quickSetter(cursor, "y", "px")
    const xSetterRing   = gsap.quickSetter(ring, "x", "px")
    const ySetterRing   = gsap.quickSetter(ring, "y", "px")

    const onMouseMove = (e: MouseEvent) => {
      xSetterCursor(e.clientX)
      ySetterCursor(e.clientY)
      // Slight delay for ring for smooth lag effect
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" })
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isPickable = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.closest('.card') || target.closest('[style*="cursor: pointer"]')
      
      if (isPickable) {
        gsap.to(ring, { scale: 1.8, duration: 0.3, background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.4)' })
        gsap.to(cursor, { scale: 1.2, duration: 0.3 })
        gsap.to(label, { opacity: 1, y: -25, scale: 1, duration: 0.2 })
      } else {
        gsap.to(ring, { scale: 1, duration: 0.3, background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' })
        gsap.to(cursor, { scale: 1, duration: 0.3 })
        gsap.to(label, { opacity: 0, y: -15, scale: 0.8, duration: 0.2 })
      }
    }

    const onMouseDown = () => gsap.to([cursor, ring], { scale: 0.8, duration: 0.15 })
    const onMouseUp   = () => gsap.to([cursor, ring], { scale: 1, duration: 0.15 })

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <div id="cursor-container" style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 10000 }}>
      {/* Label */}
      <div 
        ref={labelRef}
        style={{
          position: 'absolute', top: 0, left: 0,
          background: '#ffffff', color: '#111113',
          padding: '3px 9px', borderRadius: 4,
          fontSize: 10, fontWeight: 700,
          opacity: 0, pointerEvents: 'none',
          transform: 'translate(-50%, -200%)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          whiteSpace: 'nowrap'
        }}
      >
        SELECT
      </div>

      {/* Actual Dot */}
      <div 
        ref={cursorRef}
        style={{
          position: 'absolute', top: -4, left: -4,
          width: 8, height: 8,
          background: '#ffffff', borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Outer Ring */}
      <div 
        ref={ringRef}
        style={{
          position: 'absolute', top: -15, left: -15,
          width: 30, height: 30,
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      
      <style>{`
        body, a, button, input {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          #cursor-container { display: none !important; }
          body, a, button, input { cursor: auto !important; }
        }
      `}</style>
    </div>
  )
}

