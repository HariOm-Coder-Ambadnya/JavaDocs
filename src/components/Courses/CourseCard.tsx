import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, BarChart2, Coffee, Puzzle, Leaf, Rocket, Database } from 'lucide-react'
import type { Course } from '../../data/courses'

interface Props { course: Course; idx: number }

const ICON_MAP = {
  Coffee: Coffee,
  Puzzle: Puzzle,
  Leaf: Leaf,
  Rocket: Rocket,
  Database: Database,
}

export default function CourseCard({ course, idx }: Props) {
  const IconComponent = ICON_MAP[course.iconName]
  const levelColors: Record<string, string> = {
    Beginner:     '#ffffff',
    Intermediate: '#d1d5db',
    Advanced:     '#9ca3af',
  }
  const lc = levelColors[course.level] ?? '#71717a'

  return (
    <div className="card card-hover" style={{
      padding: '24px',
      display: 'flex', flexDirection: 'column', gap: 0,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle top accent line */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: course.color, borderRadius: '14px 14px 0 0', opacity: 0.6 }} />

      {/* Icon row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{
          width: 46, height: 46, borderRadius: 12,
          background: course.bg, border: `1px solid ${course.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {IconComponent && <IconComponent size={22} color={course.color} />}
        </div>
        <span style={{
          fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 5,
          color: lc, background: `${lc}15`,
          border: `1px solid ${lc}25`,
        }}>
          {course.level}
        </span>
      </div>

      <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f4f4f5', marginBottom: 8, letterSpacing: '-0.01em' }}>
        {course.title}
      </h3>
      <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
        {course.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
        {course.tags.map(t => (
          <span key={t} style={{ fontSize: 11, padding: '2px 8px', borderRadius: 5, background: '#242428', color: '#71717a', border: '1px solid rgba(255,255,255,0.06)' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', gap: 14, fontSize: 12, color: '#52525b', marginBottom: 18, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><BookOpen size={11} color="#71717a"/>{course.lessons} lessons</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} color="#71717a"/>{course.duration}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><BarChart2 size={11} color="#71717a"/>{course.level}</span>
      </div>

      <Link to={`/course/${course.id}`} className="btn-primary" style={{
        fontSize: 13, justifyContent: 'center',
        background: idx === 0 ? '#ffffff' : '#242428',
        color: idx === 0 ? '#111113' : '#a1a1aa',
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = course.color; el.style.color = '#fff' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = idx === 0 ? '#ffffff' : '#242428'; el.style.color = idx === 0 ? '#111113' : '#a1a1aa' }}
      >
        Start Course <ArrowRight size={13} />
      </Link>
    </div>
  )
}
