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
                    width: 38, height: 38, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `${section.color}12`, border: `1px solid ${section.color}25`,
                  }}>
                    {Icon && <Icon size={18} color={section.color} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: 17, fontWeight: 700, color: '#f4f4f5', letterSpacing: '-0.01em' }}>{section.label}</h2>
                    {course && <p style={{ fontSize: 12, color: '#52525b', marginTop: 2 }}>{course.lessons} lessons · {course.duration}</p>}
                  </div>
                  <Link to={`/course/${section.id}`} style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    fontSize: 12, fontWeight: 600, color: section.color, textDecoration: 'none',
                    transition: 'gap 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.gap = '8px'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.gap = '5px'}
                  >
                    View Course <ArrowRight size={12} />
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: 8 }}>
                  {section.items.map((item, i) => (
                    <Link key={item.id} to={`/docs/${item.id}`} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 16px',
                      background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 10, textDecoration: 'none',
                      transition: 'border-color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${section.color}30`; el.style.background = '#242428' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.background = '#1c1c1f' }}
                    >
                      <div style={{
                        width: 28, height: 28, borderRadius: 7, flexShrink: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 700, color: '#fff',
                        background: section.color, fontFamily: 'monospace',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: '#a1a1aa', flex: 1 }}>{item.label}</span>
                      <ArrowRight size={12} color="#3f3f46" />
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
