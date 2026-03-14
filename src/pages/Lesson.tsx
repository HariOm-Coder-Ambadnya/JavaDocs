import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Menu, Lightbulb } from 'lucide-react'
import Sidebar from '../components/Sidebar/Sidebar'
import CodeBlock from '../components/CodeBlock/CodeBlock'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import { LESSONS, SIDEBAR_SECTIONS } from '../data/lessons'
import { COURSES } from '../data/courses'
import { ICON_MAP } from '../utils/getIcon'

function formatInline(text: string): string {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.*?)\*\*/g,'<strong style="color:#f4f4f5;font-weight:600">$1</strong>')
    .replace(/\*(.*?)\*/g,'<em>$1</em>')
    .replace(/`(.*?)`/g,'<code>$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" style="color:#ffffff;text-decoration:underline">$1</a>')
}

function parseContent(content: string) {
  const lines = content.split('\n')
  const els: React.ReactElement[] = []
  let i = 0, k = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      els.push(<h2 key={k++}>{line.slice(3)}</h2>)
    } else if (line.startsWith('### ')) {
      els.push(<h3 key={k++}>{line.slice(4)}</h3>)
    } else if (line.startsWith('| ')) {
      const rows: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++ }
      const [hdr,, ...body] = rows
      const heads = hdr.split('|').filter(Boolean).map(h => h.trim())
      const brows = body.map(r => r.split('|').filter(Boolean).map(c => c.trim()))
      els.push(
        <div key={k++} style={{ overflowX: 'auto', margin: '16px 0' }}>
          <table><thead><tr>{heads.map((h,j) => <th key={j}>{h}</th>)}</tr></thead>
          <tbody>{brows.map((row,j) => <tr key={j}>{row.map((c,m) => <td key={m}>{c}</td>)}</tr>)}</tbody></table>
        </div>
      )
      continue
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const items: string[] = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) { items.push(lines[i].slice(2)); i++ }
      els.push(<ul key={k++}>{items.map((it,j) => <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(it) }}/>)}</ul>)
      continue
    } else if (line.startsWith('```')) {
      const clines: string[] = []; i++
      while (i < lines.length && !lines[i].startsWith('```')) { clines.push(lines[i]); i++ }
      els.push(
        <pre key={k++} style={{ background:'#161618', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:14, overflowX:'auto', margin:'12px 0' }}>
          <code style={{ fontSize:13, fontFamily:'monospace', color:'#a1a1aa' }}>{clines.join('\n')}</code>
        </pre>
      )
    } else if (line.trim() !== '') {
      els.push(<p key={k++} dangerouslySetInnerHTML={{ __html: formatInline(line) }}/>)
    }
    i++
  }
  return els
}

export default function Lesson() {
  const { lessonId } = useParams<{ lessonId: string }>()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const lesson = lessonId ? LESSONS[lessonId] : null
  useEffect(() => { window.scrollTo({ top: 0 }) }, [lessonId])
  if (!lesson) return <Navigate to="/docs" replace />

  const course  = COURSES.find(c => c.id === lesson.course)
  const section = SIDEBAR_SECTIONS.find(s => s.id === lesson.course)

  const Icon = section ? ICON_MAP[section.iconName] : null

  return (
    <div style={{ background: '#111113', display: 'flex', minHeight: 'calc(100vh - 62px)' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '40px 28px 80px' }}>

          {/* Topbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, flexWrap: 'wrap' }}>
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden btn-ghost" style={{ fontSize: 12, padding: '6px 12px' }}>
              <Menu size={13}/> Menu
            </button>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#52525b', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: '#52525b', textDecoration: 'none' }}>Home</Link>
              <ChevronRight size={12} />
              <Link to="/docs" style={{ color: '#52525b', textDecoration: 'none' }}>Docs</Link>
              {course && <><ChevronRight size={12} /><Link to={`/course/${course.id}`} style={{ color: '#52525b', textDecoration: 'none' }}>{course.title}</Link></>}
              <ChevronRight size={12} />
              <span style={{ color: '#a1a1aa' }}>{lesson.title}</span>
            </nav>
          </div>

          {/* Course badge */}
          {section && (
            <div style={{ marginBottom: 12 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 5,
                color: section.color, background: `${section.color}12`,
                border: `1px solid ${section.color}25`,
              }}>
                {Icon && <Icon size={13} color={section.color} />} {course?.title}
              </span>
            </div>
          )}

          <h1 className="display" style={{ fontSize: 'clamp(26px,4vw,42px)', color: '#f4f4f5', marginBottom: 32 }}>
            {lesson.title}
          </h1>

          <div className="prose-docs">{parseContent(lesson.content)}</div>
          <CodeBlock code={lesson.code} language={lesson.language} />
          <VideoPlayer videoId={lesson.videoId} title={`${lesson.title} — Video Lecture`} />

          {/* Key notes */}
          <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 10, padding: '22px 24px', margin: '28px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 28, height: 28, background: '#f59e0b', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lightbulb size={14} color="#fff" />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f4f4f5', margin: 0 }}>Key Takeaways</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {lesson.notes.map((note, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#71717a', lineHeight: 1.65 }}>
                  <span style={{ width: 19, height: 19, background: '#f59e0b', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>{i+1}</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Prev / Next */}
          <div style={{ display: 'flex', gap: 10, marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {lesson.prev ? (
              <Link to={`/docs/${lesson.prev}`} className="card" style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 18px', textDecoration: 'none',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <ChevronLeft size={16} color="#52525b" />
                <div>
                  <div style={{ fontSize: 10, color: '#52525b', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Previous</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f4f5' }}>{LESSONS[lesson.prev]?.title}</div>
                </div>
              </Link>
            ) : <div style={{ flex: 1 }} />}

            {lesson.next ? (
              <Link to={`/docs/${lesson.next}`} className="card" style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12,
                padding: '14px 18px', textDecoration: 'none', textAlign: 'right',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div>
                  <div style={{ fontSize: 10, color: '#52525b', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Next</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f4f5' }}>{LESSONS[lesson.next]?.title}</div>
                </div>
                <ChevronRight size={16} color="#52525b" />
              </Link>
            ) : (
              <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '14px 18px', background: 'rgba(34,197,94,0.06)', borderColor: 'rgba(34,197,94,0.2)' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#22c55e' }}>🎉 Section Complete!</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f4f5' }}>Congratulations</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
