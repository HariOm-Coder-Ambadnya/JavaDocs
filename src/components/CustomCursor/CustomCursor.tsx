import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
        stroke="black"
        strokeWidth="1"
        style={{ transform: 'rotate(-15deg) translate(-2px, -2px)' }}
      >
        <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.83-4.83 3.3 7.27c.13.28.47.4.75.27l1.91-.87c.28-.13.4-.47.27-.75l-3.3-7.27h6.4c.31 0 .47-.37.25-.59L6.1 2.86c-.22-.22-.6-.06-.6.35z" />
      </svg>
    </div>
  )
}
