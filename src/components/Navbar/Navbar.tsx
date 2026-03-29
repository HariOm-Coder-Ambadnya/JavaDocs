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
      background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.06)' : 'transparent'}`,
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{ width: 28, height: 28, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 14, height: 14, background: '#000' }} />
          </div>
          <span className="modern-display" style={{ fontSize: 16, color: '#fff' }}>
            Java<span style={{ opacity: 0.5 }}>Docs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 8 }}>
          {NAV.map(n => {
            const isExternal = n.to.startsWith('http');
            const active     = loc.pathname === n.to;
            const style: React.CSSProperties = {
              padding: '6px 12px', fontSize: 10, fontWeight: 800,
              textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.15em',
              color: active ? '#fff' : '#525252',
              transition: 'all 0.2s',
            };

            if (isExternal) {
              return (
                <a key={n.label} href={n.to} target="_blank" rel="noopener noreferrer" style={style}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#525252' }}
                >{n.label}</a>
              );
            }

            return (
              <Link key={n.label} to={n.to} style={style}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#fff' }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.color = '#525252' }}
              >{n.label}</Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 16 }}>
          <form onSubmit={submit} style={{ position: 'relative' }}>
            <Search size={12} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', color: '#525252', pointerEvents: 'none' }} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="SEARCH // SYSTEM"
              style={{
                paddingLeft: 24, paddingRight: 0, paddingTop: 10, paddingBottom: 10,
                fontSize: 10, background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)',
                color: '#fff', width: 160, outline: 'none', fontWeight: 700, letterSpacing: '0.1em',
                transition: 'all 0.3s',
              }}
              onFocus={e => { e.target.style.width = '200px'; e.target.style.borderBottomColor = 'rgba(255,255,255,0.4)' }}
              onBlur={e => { e.target.style.width = '160px'; e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)' }}
            />
          </form>

          <Link to="/docs/java-intro" style={{
            fontSize: 10, fontWeight: 800, color: '#000', background: '#fff',
            textDecoration: 'none', padding: '10px 20px', textTransform: 'uppercase', letterSpacing: '0.1em'
          }}>
            Initialize
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', position: 'fixed', inset: '70px 0 0 0', zIndex: 90 }}>
          {NAV.map(n => {
            const isExternal = n.to.startsWith('http');
            const style: React.CSSProperties = { display: 'block', padding: '20px 0', fontSize: 24, fontWeight: 700, color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', textTransform: 'uppercase', letterSpacing: '-0.02em' };
            
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
        </div>
      )}
    </header>
  )
}
