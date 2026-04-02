import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Puzzle, Leaf, Rocket, Database } from 'lucide-react'

const STEPS = [
  { n: '01', label: 'Java Fundamentals',  desc: 'Variables, types, loops, arrays & collections.', color: '#fff', to: '/docs/java-intro', icon: Coffee },
  { n: '02', label: 'OOP Concepts',       desc: 'Encapsulation, inheritance & abstraction.',  color: '#aaa', to: '/docs/oop-encapsulation', icon: Puzzle },
  { n: '03', label: 'Spring Framework',   desc: 'IoC container, Dependency Injection & MVC.', color: '#777', to: '/docs/spring-ioc', icon: Leaf },
  { n: '04', label: 'Spring Boot',        desc: 'REST APIs, auto-config & validation.', color: '#fff', to: '/docs/sb-setup', icon: Rocket },
  { n: '05', label: 'JPA / Hibernate',    desc: 'Entities, repos & relationships.', color: '#777', to: '/docs/jpa-entities', icon: Database },
]

export default function Roadmap() {
  return (
    <section style={{ padding: '120px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }} className="gsap-slide-up">
          <p className="tech-label" style={{ marginBottom: 18 }}>Architecture</p>
          <h2 className="modern-display" style={{ fontSize: 'clamp(32px,5vw,56px)', color: '#fff', marginBottom: 20 }}>
            Curated Path to Mastery
          </h2>
          <p style={{ fontSize: 13, color: '#71717a', maxWidth: 480, margin: '0 auto', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            A rigorous five-module sequence designed for rapid architectural growth.
          </p>
        </div>

        {/* Steps grid */}
        <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 1 }}>
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <Link key={s.n} to={s.to} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '40px 32px',
                  background: '#080808',
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
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
                  <div className="tech-label" style={{ marginBottom: 24, fontSize: 10, opacity: 0.5 }}>Step // {s.n}</div>
                  
                  <div style={{ marginBottom: 20 }}>
                    <Icon size={24} color="#fff" />
                  </div>

                  <h3 className="modern-display" style={{ fontSize: 18, color: '#fff', marginBottom: 12 }}>
                    {s.label}
                  </h3>
                  <p style={{ fontSize: 12, color: '#71717a', lineHeight: 1.7, marginBottom: 28, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10, fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Access <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
