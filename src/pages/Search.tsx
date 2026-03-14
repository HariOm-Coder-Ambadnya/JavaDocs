import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search as SearchIcon, ArrowRight } from 'lucide-react'
import { LESSONS, SIDEBAR_SECTIONS } from '../data/lessons'
import { ICON_MAP } from '../utils/getIcon'

interface Result { 
  id: string; 
  title: string; 
  courseLabel: string; 
  courseColor: string; 
  courseIconName: 'Coffee' | 'Puzzle' | 'Leaf' | 'Rocket' | 'Database' | null; 
  snippet: string 
}

function getResults(q: string): Result[] {
  if (!q.trim()) return []
  const lq = q.toLowerCase()
  return Object.values(LESSONS)
    .filter(l => l.title.toLowerCase().includes(lq) || l.content.toLowerCase().includes(lq) || l.notes.some(n => n.toLowerCase().includes(lq)))
    .map(l => {
      const sec = SIDEBAR_SECTIONS.find(s => s.id === l.course)
      const idx = l.content.toLowerCase().indexOf(lq)
      const snippet = idx >= 0 ? '...' + l.content.slice(Math.max(0,idx-40), idx+100).replace(/[#*`\n]/g,' ') + '...' : l.content.slice(0,120).replace(/[#*`\n]/g,' ') + '...'
      return { 
        id: l.id, 
        title: l.title, 
        courseLabel: sec?.label ?? l.course, 
        courseColor: sec?.color ?? '#ffffff', 
        courseIconName: (sec?.iconName as any) ?? null, 
        snippet 
      }
    })
}

const POPULAR = ['ArrayList','@SpringBootApplication','JPA Entity','Dependency Injection','REST API','Encapsulation','Spring MVC','JPQL','@Autowired','Streams']

export default function Search() {
  const [params, setParams] = useSearchParams()
  const [input, setInput]   = useState(params.get('q') ?? '')
  const q = params.get('q') ?? ''
  const results = getResults(q)
  useEffect(() => { setInput(q) }, [q])

  const submit = (e: React.FormEvent) => { e.preventDefault(); setParams(input.trim() ? { q: input.trim() } : {}) }

  return (
    <div style={{ background: '#111113', minHeight: '100vh', padding: '60px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>

        <div style={{ marginBottom: 36 }}>
          <p className="section-label" style={{ marginBottom: 12 }}>Search</p>
          <h1 className="display" style={{ fontSize: 'clamp(26px,4vw,42px)', color: '#f4f4f5', marginBottom: 8 }}>
            Search Documentation
          </h1>
          <p style={{ fontSize: 14, color: '#71717a' }}>Search across all lessons, code examples and concepts.</p>
        </div>

        <form onSubmit={submit} style={{ position: 'relative', marginBottom: 36 }}>
          <SearchIcon size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#52525b', pointerEvents: 'none' }} />
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Search topics, annotations, concepts..." autoFocus
            style={{
              width: '100%', paddingLeft: 42, paddingRight: 110, paddingTop: 14, paddingBottom: 14,
              fontSize: 14, background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10, color: '#f4f4f5', outline: 'none', transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(249,115,22,0.5)'}
            onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'}
          />
          <button type="submit" className="btn-primary" style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', padding: '7px 16px', fontSize: 12 }}>
            Search
          </button>
        </form>

        {q && (
          <div>
            <p style={{ fontSize: 12, color: '#52525b', marginBottom: 16 }}>
              {results.length > 0 ? `${results.length} result${results.length!==1?'s':''} for "${q}"` : `No results for "${q}"`}
            </p>
            {results.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>🔍</div>
                <p style={{ color: '#52525b', fontSize: 14 }}>Try: "ArrayList", "@Autowired", or "Spring Boot"</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {results.map(r => {
                  const Icon = r.courseIconName ? ICON_MAP[r.courseIconName] : null
                  return (
                    <Link key={r.id} to={`/docs/${r.id}`} className="card" style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 18px',
                      textDecoration: 'none', transition: 'border-color 0.15s, background 0.15s',
                    }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background='#242428'; el.style.borderColor='rgba(255,255,255,0.12)' }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background='#1c1c1f'; el.style.borderColor='rgba(255,255,255,0.07)' }}
                    >
                      <div style={{
                        width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginTop: 4,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: `${r.courseColor}12`, border: `1px solid ${r.courseColor}25`,
                      }}>
                        {Icon ? <Icon size={14} color={r.courseColor} /> : <SearchIcon size={14} color="#52525b" />}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ marginBottom: 5 }}>
                          <span style={{ fontSize: 10, fontWeight: 600, padding: '2px 7px', borderRadius: 4, color: r.courseColor, background: `${r.courseColor}12` }}>{r.courseLabel}</span>
                        </div>
                        <h3 style={{ fontSize: 14, fontWeight: 700, color: '#f4f4f5', marginBottom: 5 }}>{r.title}</h3>
                        <p style={{ fontSize: 12, color: '#71717a', lineHeight: 1.6, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                          {r.snippet}
                        </p>
                      </div>
                      <ArrowRight size={13} color="#3f3f46" style={{ flexShrink: 0, marginTop: 3 }} />
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {!q && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 600, color: '#52525b', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>Popular topics</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {POPULAR.map(t => (
                <button key={t} onClick={() => setParams({ q: t })} className="badge" style={{ cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.4)'; el.style.color='#ffffff' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor='rgba(255,255,255,0.12)'; el.style.color='#a1a1aa' }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
