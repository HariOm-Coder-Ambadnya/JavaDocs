import { Link } from 'react-router-dom'
import { ArrowRight, Coffee, Puzzle, Leaf, Rocket, Database } from 'lucide-react'

const STEPS = [
  { n: '01', label: 'Java Fundamentals',  desc: 'Variables, types, loops, arrays, methods & collections.', color: '#ffffff', to: '/docs/java-intro',        icon: Coffee },
  { n: '02', label: 'OOP Concepts',       desc: 'Encapsulation, inheritance, polymorphism & abstraction.',  color: '#d1d5db', to: '/docs/oop-encapsulation', icon: Puzzle },
  { n: '03', label: 'Spring Framework',   desc: 'IoC container, Dependency Injection, Beans & MVC.',       color: '#a1a1aa', to: '/docs/spring-ioc',         icon: Leaf },
  { n: '04', label: 'Spring Boot',        desc: 'REST APIs, auto-config, validation & exception handling.', color: '#ffffff', to: '/docs/sb-setup',          icon: Rocket },
  { n: '05', label: 'JPA / Hibernate',    desc: 'Entities, repositories, relationships & JPQL queries.',   color: '#71717a', to: '/docs/jpa-entities',       icon: Database },
]

export default function Roadmap() {
  return (
    <section style={{ padding: '100px 24px', background: '#0d0d0f' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 60 }} className="gsap-slide-up">
          <p className="section-label" style={{ marginBottom: 14 }}>Learning Roadmap</p>
          <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#f4f4f5', marginBottom: 14 }}>
            Your path to Spring mastery
          </h2>
          <p style={{ fontSize: 16, color: '#71717a', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Five structured modules, built in the right order. Start at Java, end with JPA.
          </p>
        </div>

        {/* Steps grid */}
        <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px,1fr))', gap: 12 }}>
          {STEPS.map((s) => {
            const Icon = s.icon
            return (
              <Link key={s.n} to={s.to} style={{ textDecoration: 'none' }}>
                <div className="card" style={{
                  padding: '28px 24px 24px',
                  position: 'relative', overflow: 'hidden',
                  transition: 'border-color 0.2s, transform 0.25s, box-shadow 0.25s',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = `${s.color}40`
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 16px 40px rgba(0,0,0,0.4)`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.07)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
                >
                  {/* Step number bg */}
                  <div style={{
                    position: 'absolute', top: -10, right: -6,
                    fontSize: 72, fontWeight: 900, color: `${s.color}08`,
                    lineHeight: 1, fontFamily: 'Fraunces, serif', pointerEvents: 'none',
                  }}>{s.n}</div>

                  {/* Step number badge */}
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 28, height: 28, borderRadius: 8,
                    background: `${s.color}15`, border: `1px solid ${s.color}30`,
                    fontSize: 11, fontWeight: 700, color: s.color,
                    fontFamily: 'monospace', marginBottom: 16,
                  }}>
                    {s.n}
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <Icon size={28} color={s.color} />
                  </div>

                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f4f4f5', marginBottom: 8, letterSpacing: '-0.01em' }}>
                    {s.label}
                  </h3>
                  <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.65, marginBottom: 20 }}>
                    {s.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: s.color }}>
                    Start <ArrowRight size={13} />
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
