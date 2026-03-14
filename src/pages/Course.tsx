import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, Play, CheckCircle } from 'lucide-react'
import { COURSES } from '../data/courses'
import { SIDEBAR_SECTIONS, LESSONS } from '../data/lessons'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import { ICON_MAP } from '../utils/getIcon'

export default function Course() {
  const { courseId } = useParams<{ courseId: string }>()
  useScrollAnimations()
  const course  = COURSES.find(c => c.id === courseId)
  const section = SIDEBAR_SECTIONS.find(s => s.id === courseId)
  if (!course || !section) return <Navigate to="/docs" replace />

  const Icon = ICON_MAP[course.iconName]

  return (
    <div style={{ background: '#111113', minHeight: '100vh', padding: '48px 24px 100px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <Link to="/docs" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#52525b', textDecoration: 'none', marginBottom: 32 }}>
          ← Back to Docs
        </Link>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginBottom: 52, alignItems: 'flex-start' }} className="gsap-fade">
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 58, height: 58, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', background: course.bg, border: `1px solid ${course.color}25` }}>
                {Icon && <Icon size={28} color={course.color} />}
              </div>
              <div>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 5, color: course.color, background: `${course.color}12`, marginBottom: 5 }}>{course.level}</span>
                <h1 className="display" style={{ fontSize: 'clamp(22px,3vw,34px)', color: '#f4f4f5' }}>{course.title}</h1>
              </div>
            </div>
            <p style={{ fontSize: 14, color: '#71717a', lineHeight: 1.7, marginBottom: 18 }}>{course.desc}</p>
            <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#52525b' }}>
              {[{ I: BookOpen, t: `${course.lessons} lessons` },{ I: Clock, t: course.duration },{ I: Play, t: 'Videos' }].map(({ I: Icon, t }) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Icon size={13} color={course.color}/>{t}</span>
              ))}
            </div>
          </div>

          {/* Start card */}
          <div className="card" style={{ width: 250, padding: '22px 20px' }}>
            <div className="display" style={{ fontSize: 22, color: '#f4f4f5', marginBottom: 3 }}>Free</div>
            <div style={{ fontSize: 12, color: '#52525b', marginBottom: 18 }}>No sign-up needed</div>
            <Link to={`/docs/${section.items[0].id}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, marginBottom: 18 }}>
              Start Learning <ArrowRight size={13} />
            </Link>
            {['Structured lessons','Real code examples','Video lectures','Key notes'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: '#71717a', marginBottom: 7 }}>
                <CheckCircle size={12} color={course.color}/>{item}
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f4f4f5', marginBottom: 12, letterSpacing: '-0.01em' }}>Course Contents</h2>
        <div className="gsap-stagger" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {section.items.map((item, i) => {
            const lesson = LESSONS[item.id]
            return (
              <Link key={item.id} to={`/docs/${item.id}`} className="card" style={{
                display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
                textDecoration: 'none', transition: 'border-color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#242428'; el.style.borderColor = 'rgba(255,255,255,0.12)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1c1c1f'; el.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: 30, height: 30, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', background: course.color, flexShrink: 0, fontFamily: 'monospace' }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#f4f4f5' }}>{item.label}</div>
                  {lesson && <div style={{ fontSize: 11, color: '#52525b', marginTop: 2 }}>Video · {lesson.notes.length} key notes</div>}
                </div>
                <ArrowRight size={13} color="#3f3f46" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
