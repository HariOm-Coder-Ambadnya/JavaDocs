import { Code2, Video, Lightbulb, BookMarked, GitBranch, Zap } from 'lucide-react'

const FEATURES = [
  { icon: Code2,    title: 'Code Analysis',   desc: 'Production-quality Java & Spring implementation patterns.', id: '01' },
  { icon: Video,    title: 'Neural Stream',   desc: 'Curated technical lectures for deep visual learning.', id: '02' },
  { icon: Lightbulb, title: 'Optimized Logic', desc: 'Critical takeaways for performance and scalability.', id: '03' },
  { icon: BookMarked, title: 'Core Syllabus',  desc: 'Accelerated modules from core to enterprise architecture.', id: '04' },
  { icon: GitBranch, title: 'Open Kernel',    desc: 'Fully transparent content, available for contribution.', id: '05' },
  { icon: Zap,      title: 'Zero Friction',   desc: 'Permanent open access. No registration required.', id: '06' },
]

export default function Features() {
  return (
    <section style={{ padding: '120px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }} className="gsap-slide-up">
          <p className="tech-label" style={{ marginBottom: 18 }}>Optimization</p>
          <h2 className="modern-display" style={{ fontSize: 'clamp(32px,5vw,56px)', color: '#fff', marginBottom: 20 }}>
            Mastery by Design
          </h2>
          <p style={{ fontSize: 13, color: '#71717a', maxWidth: 480, margin: '0 auto', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            A precision-engineered platform for high-performance learning.
          </p>
        </div>

        <div className="gsap-stagger" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 1,
        }}>
          {FEATURES.map(({ icon: Icon, title, desc, id }) => (
            <div key={title} style={{
              padding: '40px',
              background: '#080808',
              border: '1px solid rgba(255,255,255,0.04)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.1)'
              el.style.background = '#0d0d0d'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(255,255,255,0.04)'
              el.style.background = '#080808'
            }}
            >
              <div style={{
                color: '#fff', opacity: 0.8,
                marginBottom: 24,
              }}>
                <Icon size={22} />
              </div>
              <div className="tech-label" style={{ marginBottom: 12, opacity: 0.3 }}>Ref // {id}</div>
              <h3 className="modern-display" style={{ fontSize: 18, color: '#fff', marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ fontSize: 12, color: '#71717a', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
