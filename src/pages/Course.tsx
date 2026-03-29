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
    <div style={{ background: '#000', minHeight: '100vh', padding: '60px 24px 120px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <Link to="/docs" className="tech-label" style={{ fontSize: 10, color: '#525252', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>
          ← Back to system
        </Link>

        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, marginBottom: 80, alignItems: 'flex-start' }} className="gsap-fade">
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
              <div style={{ width: 64, height: 64, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808' }}>
                {Icon && <Icon size={28} color="#fff" />}
              </div>
              <div>
                <span className="tech-label" style={{ fontSize: 10, color: '#525252', marginBottom: 8, display: 'block' }}>{course.level} // Module</span>
                <h1 className="modern-display" style={{ fontSize: 'clamp(28px,4vw,42px)', color: '#fff' }}>{course.title}</h1>
              </div>
            </div>
            <p style={{ fontSize: 14, color: '#a1a1aa', lineHeight: 1.8, marginBottom: 24, maxWidth: 540 }}>{course.desc}</p>
            <div style={{ display: 'flex', gap: 32 }}>
              {[{ I: BookOpen, t: `${course.lessons} steps` },{ I: Clock, t: course.duration }].map(({ I: Icon, t }) => (
                <span key={t} className="tech-label" style={{ fontSize: 10, display: 'flex', alignItems: 'center', gap: 8, color: '#525252' }}><Icon size={14}/>{t}</span>
              ))}
            </div>
          </div>

          {/* Start card */}
          <div style={{ 
            width: 280, 
            padding: '40px 32px', 
            background: '#080808', 
            border: '1px solid rgba(255,255,255,0.05)' 
          }}>
            <div className="tech-label" style={{ fontSize: 10, color: '#525252', marginBottom: 4 }}>Access Priority</div>
            <div className="modern-display" style={{ fontSize: 24, color: '#fff', marginBottom: 24 }}>Standard</div>
            
            <Link to={`/docs/${section.items[0].id}`} className="btn-primary" style={{ 
              width: '100%', 
              justifyContent: 'center', 
              fontSize: 11, 
              padding: '16px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 32,
              borderRadius: 0
            }}>
              Initialize <ArrowRight size={13} />
            </Link>
            
            {['Engineered lessons','Production patterns','Visual streams','Logical kernels'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 10, color: '#525252', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <CheckCircle size={12} /> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <h2 className="tech-label" style={{ fontSize: 10, color: '#525252', marginBottom: 24 }}>System Contents // Steps</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {section.items.map((item, i) => {
            const lesson = LESSONS[item.id]
            return (
              <Link key={item.id} to={`/docs/${item.id}`} style={{
                display: 'flex', alignItems: 'center', gap: 20, padding: '20px 24px',
                textDecoration: 'none', transition: 'all 0.2s',
                background: '#080808', border: '1px solid rgba(255,255,255,0.03)'
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#0d0d0d'; el.style.borderColor = 'rgba(255,255,255,0.1)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#080808'; el.style.borderColor = 'rgba(255,255,255,0.03)' }}
              >
                <div className="tech-label" style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#444', border: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: '#fff', letterSpacing: '0.02em' }}>{item.label}</div>
                  {lesson && <div className="tech-label" style={{ fontSize: 9, color: '#525252', marginTop: 4 }}>Stream // {lesson.notes.length} Kernels</div>}
                </div>
                <ArrowRight size={13} color="#222" />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
