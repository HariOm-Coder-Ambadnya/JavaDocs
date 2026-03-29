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
    <div style={{ background: '#000', display: 'flex', minHeight: 'calc(100vh - 70px)' }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '24px 20px 80px' }}>

          {/* Topbar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden" style={{ 
              fontSize: 9, fontWeight: 900, color: '#000', background: '#fff', border: 'none', 
              padding: '10px 16px', textTransform: 'uppercase', letterSpacing: '0.15em'
            }}>
              MENU
            </button>
            <nav className="tech-label" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 8, color: '#333' }}>
              <Link to="/docs" style={{ color: '#333', textDecoration: 'none' }}>SYSTEM</Link>
              <span style={{ opacity: 0.5 }}>/</span>
              <span style={{ color: '#666' }}>{lesson.title}</span>
            </nav>
          </div>

          {/* Module identifier */}
          {section && (
            <div style={{ marginBottom: 16 }}>
              <span className="tech-label" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 10, color: '#fff', opacity: 0.4
              }}>
                {Icon && <Icon size={14} />} {course?.title} // MODULE
              </span>
            </div>
          )}

          <h1 className="modern-display" style={{ fontSize: 'clamp(24px,6vw,42px)', color: '#fff', marginBottom: 40, lineHeight: 1.1 }}>
            {lesson.title}
          </h1>

          <div className="prose-docs" style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.8 }}>
            {parseContent(lesson.content)}
          </div>
          
          <CodeBlock code={lesson.code} language={lesson.language} />
          <VideoPlayer videoId={lesson.videoId} title={`${lesson.title} — Technical Stream`} />

          {/* Key findings */}
          <div style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.05)', padding: '40px 32px', margin: '48px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 32, height: 32, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lightbulb size={16} color="#000" />
              </div>
              <h3 className="modern-display" style={{ fontSize: 16, color: '#fff', margin: 0 }}>Core Findings</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {lesson.notes.map((note, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, fontSize: 12, color: '#71717a', lineHeight: 1.8 }}>
                  <span className="tech-label" style={{ fontSize: 9, color: '#fff', opacity: 0.3, marginTop: 4 }}>[{String(i+1).padStart(2,'0')}]</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* Sequential Control */}
          <div style={{ 
            display: 'flex', 
            flexDirection: window.innerWidth < 768 ? 'column' : 'row',
            gap: 1, 
            marginTop: 80, 
            paddingTop: 40, 
            borderTop: '1px solid rgba(255,255,255,0.05)' 
          }}>
            {lesson.prev ? (
              <Link to={`/docs/${lesson.prev}`} style={{
                flex: 1, display: 'flex', alignItems: 'center', gap: 16,
                padding: '24px', background: '#050505', border: '1px solid rgba(255,255,255,0.03)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = '#0a0a0a' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.03)'; el.style.background = '#050505' }}
              >
                <ChevronLeft size={16} color="#525252" />
                <div>
                  <div className="tech-label" style={{ fontSize: 9, color: '#525252', marginBottom: 4 }}>Previous // Step</div>
                  <div className="modern-display" style={{ fontSize: 13, color: '#fff' }}>{LESSONS[lesson.prev]?.title}</div>
                </div>
              </Link>
            ) : <div style={{ flex: 1 }} />}

            {lesson.next ? (
              <Link to={`/docs/${lesson.next}`} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16,
                padding: '24px', background: '#050505', border: '1px solid rgba(255,255,255,0.03)',
                textDecoration: 'none', textAlign: 'right', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.background = '#0a0a0a' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.03)'; el.style.background = '#050505' }}
              >
                <div>
                  <div className="tech-label" style={{ fontSize: 9, color: '#525252', marginBottom: 4 }}>Next // Step</div>
                  <div className="modern-display" style={{ fontSize: 13, color: '#fff' }}>{LESSONS[lesson.next]?.title}</div>
                </div>
                <ChevronRight size={16} color="#525252" />
              </Link>
            ) : (
              <div style={{ flex: 1, padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'right' }}>
                <div className="tech-label" style={{ fontSize: 9, color: '#fff', marginBottom: 4, opacity: 0.5 }}>Module Complete</div>
                <div className="modern-display" style={{ fontSize: 13, color: '#fff' }}>Standard Achieved</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
