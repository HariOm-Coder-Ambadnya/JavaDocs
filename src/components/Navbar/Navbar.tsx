import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Menu, X, BookOpen } from 'lucide-react'

const NAV = [
  { label: 'Resources', to: '/docs' },
  { label: 'Courses',   to: '/course/java' },
  { label: 'Roadmap',   to: '/roadmap' },
  { label: 'Community', to: 'https://chat.whatsapp.com/BpNJmQCNXb3DXRNDUfBCxV', external: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [q, setQ]               = useState('')
  const loc = useLocation()
  const nav = useNavigate()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [loc])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (q.trim()) { nav(`/search?q=${encodeURIComponent(q.trim())}`); setQ('') }
  }

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(17,17,19,0.92)' : 'rgba(17,17,19,0.6)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)'}`,
      transition: 'all 0.3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

        {/* Logo with Icon */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.png" alt="JavaDocs" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ fontWeight: 800, fontSize: 19, color: '#f4f4f5', letterSpacing: '-0.02em' }}>
            Java<span style={{ color: '#ffffff' }}>Docs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
          {NAV.map(n => {
            const isExternal = n.to.startsWith('http');
            const style: React.CSSProperties = {
              padding: '6px 14px', borderRadius: 7, fontSize: 14, fontWeight: 500,
              textDecoration: 'none',
              color: loc.pathname === n.to ? '#f4f4f5' : '#71717a',
              background: loc.pathname === n.to ? 'rgba(255,255,255,0.07)' : 'transparent',
              transition: 'all 0.15s',
            };

            if (isExternal) {
              return (
                <a key={n.label} href={n.to} target="_blank" rel="noopener noreferrer" style={style}
                  onMouseEnter={e => { e.currentTarget.style.color = '#a1a1aa' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#71717a' }}
                >{n.label}</a>
              );
            }

            return (
              <Link key={n.label} to={n.to} style={style}
                onMouseEnter={e => { if (loc.pathname !== n.to) (e.currentTarget as HTMLElement).style.color = '#a1a1aa' }}
                onMouseLeave={e => { if (loc.pathname !== n.to) (e.currentTarget as HTMLElement).style.color = '#71717a' }}
              >{n.label}</Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 10 }}>
          <form onSubmit={submit} style={{ position: 'relative' }}>
            <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#52525b', pointerEvents: 'none' }} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search..."
              style={{
                paddingLeft: 30, paddingRight: 12, paddingTop: 7, paddingBottom: 7,
                fontSize: 13, background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 7, color: '#a1a1aa', width: 148, outline: 'none',
                transition: 'border-color 0.2s, width 0.25s',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.width = '190px' }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.width = '148px' }}
            />
          </form>

          <Link to="/docs/java-intro" className="btn-ghost" style={{ fontSize: 13, padding: '7px 16px' }}>
            <BookOpen size={14} /> Docs
          </Link>
          <Link to="/docs/java-intro" className="btn-primary" style={{ fontSize: 13, padding: '7px 18px' }}>
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: 4 }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#111113', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '12px 24px 20px' }}>
          {NAV.map(n => {
            const isExternal = n.to.startsWith('http');
            const style: React.CSSProperties = { display: 'block', padding: '11px 0', fontSize: 15, fontWeight: 500, color: '#a1a1aa', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' };
            
            if (isExternal) {
              return (
                <a key={n.label} href={n.to} target="_blank" rel="noopener noreferrer" style={style}>
                  {n.label}
                </a>
              );
            }
            return (
              <Link key={n.label} to={n.to} style={style}>
                {n.label}
              </Link>
            );
          })}
          <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
            <Link to="/docs" className="btn-ghost" style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}>Docs</Link>
            <Link to="/docs/java-intro" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 13 }}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  )
}
