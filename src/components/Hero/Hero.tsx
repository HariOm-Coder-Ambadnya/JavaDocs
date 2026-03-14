import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Play, Users, BookOpen, Star, TrendingUp } from 'lucide-react'
import { gsap } from 'gsap'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-title',    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 })
        .fromTo('.hero-sub',      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-ctas',     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-trusted',  { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-mockup',   { opacity: 0, y: 50, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, '-=0.5')
        .fromTo('.hero-stat-card',{ opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, '-=0.4')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} style={{ padding: '80px 24px 60px', maxWidth: 1200, margin: '0 auto', position: 'relative' }}>

      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto', position: 'relative' }}>
        
        {/* Title */}
        <h1 className="hero-title display" style={{ fontSize: 'clamp(38px,5.5vw,68px)', color: '#f4f4f5', marginBottom: 22, opacity: 0 }}>
          Managing your Java &amp;{' '}
          <span style={{
            background: 'linear-gradient(135deg, #ffffff, #a1a1aa)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Spring learning</span>
        </h1>

        <p className="hero-sub" style={{ fontSize: 17, color: '#71717a', lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px', opacity: 0 }}>
          An open source documentation platform that uses structured lessons, real code examples,
          and curated video lectures to teach Java, Spring Boot, and JPA.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap', opacity: 0 }}>
          <Link to="/docs/java-intro" className="btn-primary" style={{ fontSize: 14 }}>
            Get started for free
          </Link>
          <Link to="/docs" className="btn-ghost" style={{ fontSize: 14 }}>
            <Play size={14} /> Watch demo
          </Link>
        </div>

        {/* Trusted row */}
        <div className="hero-trusted" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap', opacity: 0 }}>
          {[
            { icon: BookOpen, label: '40+ lessons', color: '#ffffff' },
            { icon: Users, label: '180k+ learners', color: '#a1a1aa' },
            { icon: Star, label: '4.9 rating', color: '#ffffff' },
            { icon: TrendingUp, label: 'Free forever', color: '#d1d5db' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: '#71717a' }}>
              <Icon size={14} color={color} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard mockup card */}
      <div className="hero-mockup" style={{ marginTop: 56, position: 'relative', opacity: 0 }}>
        <div className="card" style={{
          padding: '6px', borderRadius: 16,
          background: '#1c1c1f',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          overflow: 'hidden',
        }}>
          {/* Fake browser bar */}
          <div style={{ background: '#242428', borderRadius: '10px 10px 0 0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#ef4444','#f59e0b','#22c55e'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />)}
            </div>
            <div style={{ flex: 1, background: '#1c1c1f', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#52525b', textAlign: 'center' }}>
              javadocs.dev/docs/spring-boot
            </div>
          </div>

          {/* Fake app layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', minHeight: 320 }}>
            {/* Sidebar */}
            <div style={{ background: '#161618', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '16px 12px' }}>
              <div style={{ fontSize: 10, color: '#52525b', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 8 }}>Spring Boot</div>
              {['Project Setup','REST APIs','Validation','Exception Handling','Auto Config'].map((item, i) => (
                <div key={item} style={{
                  padding: '7px 10px', borderRadius: 6, fontSize: 12, color: i === 1 ? '#f4f4f5' : '#52525b',
                  background: i === 1 ? 'rgba(255,255,255,0.1)' : 'transparent',
                  marginBottom: 2, cursor: 'pointer',
                }}>{item}</div>
              ))}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '12px 8px' }} />
              <div style={{ fontSize: 10, color: '#52525b', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 8 }}>JPA / Hibernate</div>
              {['Entities','Repositories','Relationships'].map(item => (
                <div key={item} style={{ padding: '7px 10px', borderRadius: 6, fontSize: 12, color: '#52525b', marginBottom: 2 }}>{item}</div>
              ))}
            </div>

            {/* Content area */}
            <div style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ fontSize: 10, background: 'rgba(34,197,94,0.15)', color: '#22c55e', padding: '3px 8px', borderRadius: 4, fontWeight: 600 }}>Spring Boot</span>
                <span style={{ fontSize: 10, color: '#52525b' }}>›</span>
                <span style={{ fontSize: 10, color: '#52525b' }}>REST APIs</span>
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#f4f4f5', marginBottom: 10, fontFamily: 'Fraunces, serif' }}>Building REST APIs</div>
              <div style={{ fontSize: 12, color: '#52525b', lineHeight: 1.7, marginBottom: 16 }}>
                Spring Boot makes building RESTful APIs effortless with @RestController and auto-configured Jackson for JSON serialisation...
              </div>
              {/* Code snippet preview */}
              <div style={{ background: '#0d0d0f', borderRadius: 8, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: 11, fontFamily: 'monospace', color: '#52525b', lineHeight: 1.8 }}>
                  <span style={{ color: '#a855f7' }}>@RestController</span><br/>
                  <span style={{ color: '#3b82f6' }}>public class </span><span style={{ color: '#f59e0b' }}>UserController </span><span style={{ color: '#71717a' }}>{'{'}</span><br/>
                  <span style={{ paddingLeft: 14, color: '#a855f7' }}>@GetMapping</span><span style={{ color: '#71717a' }}>("/users")</span><br/>
                  <span style={{ paddingLeft: 14, color: '#3b82f6' }}>public </span><span style={{ color: '#22c55e' }}>List</span><span style={{ color: '#71717a' }}>&lt;User&gt; </span><span style={{ color: '#f59e0b' }}>getAll</span><span style={{ color: '#71717a' }}>() {'{'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="hero-stat-card" style={{
          position: 'absolute', top: 40, left: -24,
          background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          opacity: 0,
        }}>
          <div style={{ fontSize: 10, color: '#52525b', marginBottom: 4 }}>Total Learners</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.03em' }}>180.8k <span style={{ fontSize: 12, color: '#22c55e' }}>↑</span></div>
          <div style={{ height: 32, marginTop: 8 }}>
            <svg viewBox="0 0 80 32" style={{ width: 80, height: 32 }}>
              <polyline points="0,28 10,22 20,24 30,15 40,18 50,10 60,8 70,4 80,2" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="hero-stat-card" style={{
          position: 'absolute', top: 40, right: -24,
          background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: '14px 18px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          opacity: 0,
        }}>
          <div style={{ fontSize: 10, color: '#52525b', marginBottom: 6 }}>Completion Rate</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ position: 'relative', width: 44, height: 44 }}>
              <svg viewBox="0 0 44 44" style={{ width: 44, height: 44, transform: 'rotate(-90deg)' }}>
                <circle cx="22" cy="22" r="18" fill="none" stroke="#1c1c1f" strokeWidth="4"/>
                <circle cx="22" cy="22" r="18" fill="none" stroke="#22c55e" strokeWidth="4"
                  strokeDasharray={`${0.89 * 113} 113`} strokeLinecap="round"/>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#f4f4f5' }}>89%</div>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f4f5' }}>Quality</div>
              <div style={{ fontSize: 11, color: '#52525b' }}>Avg score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
