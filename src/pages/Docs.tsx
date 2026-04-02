import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { SIDEBAR_SECTIONS } from '../data/lessons'
import { COURSES } from '../data/courses'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import { ICON_MAP } from '../utils/getIcon'

export default function Docs() {
  useScrollAnimations()

  return (
    <div style={{ background: '#111113', minHeight: '100vh', padding: '56px 24px 100px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ maxWidth: 560, marginBottom: 64 }} className="gsap-slide-up">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <BookOpen size={14} color="#ffffff" />
            <span className="section-label">Documentation</span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(30px,4vw,50px)', color: '#f4f4f5', marginBottom: 14 }}>
            All Documentation
          </h1>
          <p style={{ fontSize: 15, color: '#71717a', lineHeight: 1.7 }}>
            Browse all topics — from Java basics to Spring Boot and JPA. Every lesson includes written docs, code examples, and a curated video lecture.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {SIDEBAR_SECTIONS.map((section, si) => {
            const course = COURSES.find(c => c.id === section.id)
            const Icon = ICON_MAP[section.iconName]
            return (
              <div key={section.id} className="gsap-slide-up">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {Icon && <Icon size={18} color="#fff" />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 className="modern-display" style={{ fontSize: 16, color: '#fff' }}>{section.label}</h2>
                    {course && <p style={{ fontSize: 10, color: '#525252', marginTop: 2, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{course.lessons} lessons · {course.duration}</p>}
                  </div>
                  <Link to={`/course/${section.id}`} className="tech-label" style={{
                    fontSize: 10, color: '#fff', textDecoration: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 2
                  }}>
                    View Module
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: 1 }}>
                  {section.items.map((item, i) => (
                    <Link key={item.id} to={`/docs/${item.id}`} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '16px 20px',
                      background: '#080808', border: '1px solid rgba(255,255,255,0.03)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = '#0d0d0d' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.03)'; el.style.background = '#080808' }}
                    >
                      <div className="tech-label" style={{
                        width: 24, height: 24, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9, color: '#444',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span style={{ fontSize: 12, fontWeight: 500, color: '#a1a1aa', flex: 1, letterSpacing: '0.02em' }}>{item.label}</span>
                      <ArrowRight size={12} color="#222" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
