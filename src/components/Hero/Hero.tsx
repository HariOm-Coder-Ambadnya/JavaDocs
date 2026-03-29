import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Layers, Shield, Terminal } from 'lucide-react'
import { gsap } from 'gsap'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
      
      tl.fromTo('.t-label', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.1 })
        .fromTo('.t-title', { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1 }, '-=0.8')
        .fromTo('.t-sub', { opacity: 0 }, { opacity: 1, duration: 1.5 }, '-=0.6')
        .fromTo('.t-btn', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1 }, '-=1')
        .fromTo('.t-icon-ring', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2 }, 0)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '100px 24px',
      position: 'relative',
      overflow: 'hidden',
      background: '#000'
    }}>
      
      {/* Dynamic Background Elements */}
      <div className="t-icon-ring" style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.03)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0,
        pointerEvents: 'none',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 1000 }}>
        
        {/* Top Label */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 60 }}>
          <span className="t-label tech-label">System.v2</span>
          <span className="t-label tech-label">Java Core</span>
          <span className="t-label tech-label">Spring Expert</span>
        </div>

        {/* Main Title - Inspired by Image 2 but tech-focused */}
        <h1 className="t-title display" style={{ 
          fontSize: 'clamp(48px, 12vw, 140px)', 
          color: '#fff',
          marginBottom: 40,
          background: 'linear-gradient(to bottom, #fff 40%, rgba(255,255,255,0.6) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          padding: '0 20px'
        }}>
          Engineered <br /> Mastery
        </h1>

        {/* Minimal Subtext */}
        <p className="t-sub" style={{ 
          fontSize: 14, 
          color: '#71717a', 
          letterSpacing: '0.1em', 
          maxWidth: 500, 
          margin: '0 auto 60px', 
          lineHeight: 1.8,
          textTransform: 'uppercase'
        }}>
          The definitive architectural guide for modern Java developers. <br />
          Built for scale. Optimized for clarity.
        </p>

        {/* Minimal Actions */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32 }}>
          <Link to="/docs" className="t-btn btn-primary" style={{ 
            background: '#fff', 
            color: '#000', 
            borderRadius: 0, 
            padding: '16px 40px',
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: '0.1em'
          }}>
            Explore Docs
          </Link>
          <Link to="/roadmap" className="t-btn btn-ghost" style={{ 
            borderRadius: 0, 
            padding: '16px 40px',
            textTransform: 'uppercase',
            fontSize: 12,
            letterSpacing: '0.1em',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            Roadmap
          </Link>
        </div>

        {/* Feature Icons Row - Real Icons, Monochromatic */}
        <div style={{ marginTop: 100, display: 'flex', justifyContent: 'center', gap: 60, opacity: 0.4 }}>
          <div className="t-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Terminal size={18} />
            <span style={{ fontSize: 9, letterSpacing: '0.2em' }}>Terminal</span>
          </div>
          <div className="t-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Cpu size={18} />
            <span style={{ fontSize: 9, letterSpacing: '0.2em' }}>Runtime</span>
          </div>
          <div className="t-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Layers size={18} />
            <span style={{ fontSize: 9, letterSpacing: '0.2em' }}>Modules</span>
          </div>
          <div className="t-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Shield size={18} />
            <span style={{ fontSize: 9, letterSpacing: '0.2em' }}>Secure</span>
          </div>
        </div>
      </div>

      {/* Decorative corners like in first image */}
      <div style={{ position: 'absolute', top: 40, left: 40 }} className="tech-label t-label">Cyber Resilient</div>
      <div style={{ position: 'absolute', bottom: 40, left: 40 }} className="tech-label t-label">On Orbit // 01</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40 }} className="tech-label t-label">A.I. Powered</div>

    </section>
  )
}
