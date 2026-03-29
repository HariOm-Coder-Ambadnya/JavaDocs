import { Link } from 'react-router-dom'
import { Github, Twitter, Linkedin } from 'lucide-react'

const LINKS = {
  Learn: [
    { label: 'Java Basics',      to: '/docs/java-intro' },
    { label: 'OOP Concepts',     to: '/docs/oop-encapsulation' },
    { label: 'Spring Framework', to: '/docs/spring-ioc' },
    { label: 'Spring Boot',      to: '/docs/sb-setup' },
    { label: 'JPA / Hibernate',  to: '/docs/jpa-entities' },
  ],
  System: [
    { label: 'Documentation', to: '/docs' },
    { label: 'All Modules',   to: '/docs' },
    { label: 'Roadmap',       to: '/roadmap' },
    { label: 'Search',        to: '/search' },
  ],
  Network: [
    { label: 'Community', to: 'https://chat.whatsapp.com/BpNJmQCNXb3DXRNDUfBCxV' },
    { label: 'GitHub',    to: 'https://github.com/HariOm-Coder-Ambadnya' },
    { label: 'LinkedIn',  to: 'https://www.linkedin.com/in/rishikesh-pawar-sde' },
  ],
}

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/HariOm-Coder-Ambadnya' },
  { icon: Twitter,  href: '#' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rishikesh-pawar-sde' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 24px 60px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 60, marginBottom: 80 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 24 }}>
              <div style={{ width: 24, height: 24, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 12, height: 12, background: '#000' }} />
              </div>
              <span className="modern-display" style={{ fontSize: 16, color: '#fff' }}>
                Java<span style={{ opacity: 0.5 }}>Docs</span>
              </span>
            </Link>
            <p style={{ fontSize: 13, color: '#525252', lineHeight: 1.8, marginBottom: 32, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              High-performance documentation <br /> for the modern Java stack.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 36, height: 36,
                  background: '#080808', border: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#525252', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.1)'; el.style.color = '#fff' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.04)'; el.style.color = '#525252' }}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="tech-label" style={{ fontSize: 10, color: '#fff', marginBottom: 24, opacity: 0.3 }}>
                // {heading}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {items.map(item => {
                  const isExternal = item.to.startsWith('http');
                  const style: React.CSSProperties = { fontSize: 11, color: '#525252', textDecoration: 'none', transition: 'all 0.2s', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 };
                  
                  if (isExternal) {
                    return (
                      <li key={item.label}>
                        <a href={item.to} target="_blank" rel="noopener noreferrer" style={style}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#525252'}
                        >{item.label}</a>
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <Link to={item.to} style={style}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#525252'}
                      >{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Infrastructure */}
          <div>
            <h4 className="tech-label" style={{ fontSize: 10, color: '#fff', marginBottom: 24, opacity: 0.3 }}>
              // Infrastructure
            </h4>
            <div style={{ padding: '24px', background: '#080808', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ fontSize: 10, color: '#525252', marginBottom: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>System Status</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', boxShadow: '0 0 10px #fff' }} />
                <span className="tech-label" style={{ fontSize: 9 }}>Operational // v4.2.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 40,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24,
        }}>
          <p className="tech-label" style={{ fontSize: 9, color: '#333' }}>
            © {new Date().getFullYear()} JAVADOCS. KERNEL BUILT BY RISHIKESH PAWAR.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            <span className="tech-label" style={{ fontSize: 9, color: '#333' }}>SECURED</span>
            <span className="tech-label" style={{ fontSize: 9, color: '#333' }}>ENCRYPTED</span>
            <span className="tech-label" style={{ fontSize: 9, color: '#333' }}>OPTIMIZED</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
