import { Code2, Video, Lightbulb, BookMarked, GitBranch, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: Code2,
    title: 'Real Code Examples',
    desc: 'Every concept backed by production-quality, runnable Java and Spring code with syntax highlighting.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: Video,
    title: 'Video Lectures',
    desc: 'Hand-picked YouTube lectures embedded directly alongside written documentation.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: Lightbulb,
    title: 'Key Takeaways',
    desc: 'Each lesson ends with numbered tips and gotchas that reinforce what you just learned.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: BookMarked,
    title: 'Structured Roadmap',
    desc: 'Follow a clear path from Java fundamentals through Spring Boot to JPA — in the right order.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: GitBranch,
    title: 'Open Source',
    desc: 'All content is open source. Contribute, fix errors, and improve lessons on GitHub.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
  {
    icon: Zap,
    title: 'Always Free',
    desc: 'No paywalls, no subscriptions. Every lesson, video, and code example — completely free forever.',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.06)',
  },
]

export default function Features() {
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>

      <div style={{ textAlign: 'center', marginBottom: 60 }} className="gsap-slide-up">
        <p className="section-label" style={{ marginBottom: 14 }}>Benefits</p>
        <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#f4f4f5', marginBottom: 14 }}>
          Benefits of using JavaDocs
        </h2>
        <p style={{ fontSize: 16, color: '#71717a', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to go from zero to Spring Boot developer, structured and free.
        </p>
      </div>

      <div className="gsap-stagger" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 12,
      }}>
        {FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
          <div key={title} className="card" style={{
            padding: '28px',
            transition: 'border-color 0.2s, transform 0.2s',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = `${color}30`
            el.style.transform = 'translateY(-3px)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(255,255,255,0.07)'
            el.style.transform = 'translateY(0)'
          }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: bg, border: `1px solid ${color}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 18,
            }}>
              <Icon size={20} color={color} />
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f4f4f5', marginBottom: 8, letterSpacing: '-0.01em' }}>
              {title}
            </h3>
            <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.7 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
