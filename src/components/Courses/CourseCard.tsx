import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, BarChart2, Coffee, Puzzle, Leaf, Rocket, Database, Layout, ShieldCheck } from 'lucide-react'
import type { Course } from '../../data/courses'

interface Props { course: Course; idx: number }

const ICON_MAP = {
  Coffee: Coffee,
  Puzzle: Puzzle,
  Leaf: Leaf,
  Rocket: Rocket,
  Database: Database,
  Layout: Layout,
  ShieldCheck: ShieldCheck,
}

export default function CourseCard({ course, idx }: Props) {
  // @ts-ignore
  const IconComponent = ICON_MAP[course.iconName] || Coffee

  return (
    <div style={{
      padding: '40px 32px',
      display: 'flex', flexDirection: 'column',
      background: '#080808',
      border: '1px solid rgba(255,255,255,0.04)',
      position: 'relative', overflow: 'hidden',
      transition: 'all 0.3s ease'
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
      {/* Icon row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ color: '#fff', opacity: 0.8 }}>
          <IconComponent size={24} />
        </div>
        <span className="tech-label" style={{ opacity: 0.4 }}>
          {course.level}
        </span>
      </div>

      <h3 className="modern-display" style={{ fontSize: 20, color: '#fff', marginBottom: 12 }}>
        {course.title}
      </h3>
      <p style={{ fontSize: 12, color: '#71717a', lineHeight: 1.8, marginBottom: 24, flex: 1, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {course.desc}
      </p>

      {/* Meta */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
        <span className="tech-label" style={{ fontSize: 9, opacity: 0.5, display: 'flex', alignItems: 'center', gap: 6 }}>
          <BookOpen size={12} /> {course.lessons}
        </span>
        <span className="tech-label" style={{ fontSize: 9, opacity: 0.5, display: 'flex', alignItems: 'center', gap: 6 }}>
          <BarChart2 size={12} /> {course.level}
        </span>
      </div>

      <Link to={`/course/${course.id}`} style={{
        fontSize: 10, 
        fontWeight: 800,
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 24
      }}>
        Initialize <ArrowRight size={12} />
      </Link>
    </div>
  )
}
