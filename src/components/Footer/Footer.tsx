import { Link } from 'react-router-dom'
import { Github, Twitter, Youtube } from 'lucide-react'

const LINKS = {
  Learn: [
    { label: 'Java Basics',      to: '/docs/java-intro' },
    { label: 'OOP Concepts',     to: '/docs/oop-encapsulation' },
    { label: 'Spring Framework', to: '/docs/spring-ioc' },
    { label: 'Spring Boot',      to: '/docs/sb-setup' },
    { label: 'JPA / Hibernate',  to: '/docs/jpa-entities' },
  ],
  Product: [
    { label: 'Documentation', to: '/docs' },
    { label: 'All Courses',   to: '/course/java' },
    { label: 'Search',        to: '/search' },
  ],
  Company: [
    { label: 'About',     to: '/' },
    { label: 'Community', to: 'https://chat.whatsapp.com/BpNJmQCNXb3DXRNDUfBCxV' },
    { label: 'Blog',      to: '/' },
    { label: 'Changelog', to: '/' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0f', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 32px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand - with Logo */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 14 }}>
              <img src="/logo.png" alt="JavaDocs" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
              <span style={{ fontWeight: 800, fontSize: 18, color: '#f4f4f5', letterSpacing: '-0.02em' }}>
                Java<span style={{ color: '#ffffff' }}>Docs</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.7, marginBottom: 20 }}>
              Free, structured documentation for Java and Spring developers.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[Github, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 32, height: 32, borderRadius: 7,
                  background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#52525b', textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.18)'; el.style.color = '#a1a1aa' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.color = '#52525b' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.04em', marginBottom: 16 }}>
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => {
                  const isExternal = item.to.startsWith('http');
                  const style: React.CSSProperties = { fontSize: 13, color: '#52525b', textDecoration: 'none', transition: 'color 0.15s' };
                  
                  if (isExternal) {
                    return (
                      <li key={item.label}>
                        <a href={item.to} target="_blank" rel="noopener noreferrer" style={style}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#a1a1aa'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#52525b'}
                        >{item.label}</a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <Link to={item.to} style={style}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#a1a1aa'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#52525b'}
                      >{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, color: '#a1a1aa', letterSpacing: '0.04em', marginBottom: 16 }}>
              Newsletter
            </h4>
            <p style={{ fontSize: 13, color: '#52525b', lineHeight: 1.6, marginBottom: 14 }}>
              Get notified when new lessons drop.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="you@email.com" style={{
                flex: 1, padding: '8px 12px', fontSize: 13,
                background: '#1c1c1f', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 7, color: '#a1a1aa', outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.4)'}
              onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'}
              />
              <button className="btn-primary" style={{ padding: '8px 14px', fontSize: 13, flexShrink: 0 }}>
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12, color: '#3f3f46' }}>
            © {new Date().getFullYear()} JavaDocs. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: '#3f3f46' }}>
            Built with React + Vite + GSAP
          </p>
        </div>
      </div>
    </footer>
  )
}
