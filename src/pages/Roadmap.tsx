import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Circle, Star, Zap, Server, Database, Layout, ShieldCheck } from 'lucide-react'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

const FULL_STACK_ROADMAP = [
  {
    stage: 'Phase 1: Java Fundamentals',
    icon: <Zap size={20} />,
    items: ['Variables & Data Types', 'Control Flow (Loops, If-Else)', 'Arrays & Collections', 'Exception Handling', 'Java 8+ Features (Streams, Lambdas)'],
    status: 'completed',
  },
  {
    stage: 'Phase 2: Object Oriented Programming',
    icon: <Star size={20} />,
    items: ['Classes & Objects', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Interfaces & Abstraction'],
    status: 'completed',
  },
  {
    stage: 'Phase 3: Database & Persistence',
    icon: <Database size={20} />,
    items: ['SQL Basics (MySQL/PostgreSQL)', 'JDBC Fundamentals', 'Hibernate ORM', 'Spring Data JPA', 'Transaction Management'],
    status: 'in-progress',
  },
  {
    stage: 'Phase 4: Spring Framework Core',
    icon: <Server size={20} />,
    items: ['Dependency Injection (DI)', 'Inversion of Control (IoC)', 'Spring Beans Lifecycle', 'Application Context', 'Spring Expressions (SpEL)'],
    status: 'pending',
  },
  {
    stage: 'Phase 5: Building APIs with Spring Boot',
    icon: <Zap size={20} />,
    items: ['Spring Boot Starters', 'REST Controllers', 'Request/Response Mapping', 'Validation & Error Handling', 'Spring Boot Actuator'],
    status: 'pending',
  },
  {
    stage: 'Phase 6: Frontend Integration (Full Stack)',
    icon: <Layout size={20} />,
    items: ['HTML/CSS Basics', 'JavaScript ES6+', 'React.js Fundamentals', 'Fetching APIs (Axios/Fetch)', 'State Management'],
    status: 'pending',
  },
  {
    stage: 'Phase 7: Security & Deployment',
    icon: <ShieldCheck size={20} />,
    items: ['Spring Security (JWT/OAuth2)', 'Dockerizing Backend & Frontend', 'AWS/Heroku Deployment', 'CI/CD Pipelines (GitHub Actions)', 'Unit Testing (JUnit/Mockito)'],
    status: 'pending',
  },
]

export default function RoadmapPage() {
  useScrollAnimations()

  return (
    <div style={{ background: '#111113', minHeight: '100vh', padding: '60px 24px 100px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }} className="gsap-slide-up">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 20 }}>
            <Zap size={14} color="#ffffff" />
            <span style={{ fontSize: 12, fontWeight: 600, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interactive Guide</span>
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: '#f4f4f5', marginBottom: 20 }}>
            Java Full Stack <br /> <span style={{ color: '#ffffff', opacity: 0.8 }}>Development Roadmap</span>
          </h1>
          <p style={{ fontSize: 18, color: '#71717a', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            A comprehensive step-by-step guide to mastering modern Java development, from core fundamentals to cloud deployment.
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, 
            background: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.05) 100%)',
            opacity: 0.2
          }} className="md:left-1/2" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            {FULL_STACK_ROADMAP.map((phase, idx) => (
              <div key={phase.stage} style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 40 }} className="gsap-slide-up">
                
                {/* Connector Point */}
                <div style={{ 
                  width: 50, height: 50, borderRadius: '50%', background: '#111113', 
                  border: `2px solid ${phase.status === 'completed' ? '#ffffff' : 'rgba(255,255,255,0.1)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2, flexShrink: 0,
                  boxShadow: phase.status === 'completed' ? '0 0 20px rgba(255,255,255,0.1)' : 'none'
                }}>
                  {phase.status === 'completed' ? <CheckCircle2 size={24} color="#ffffff" /> : (phase.status === 'in-progress' ? <Circle size={24} color="#ffffff" /> : <Circle size={24} color="#3f3f46" />)}
                </div>

                {/* Content Card */}
                <div className="card" style={{ flex: 1, padding: '32px', position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ padding: 10, borderRadius: 10, background: 'rgba(255,255,255,0.04)', color: '#ffffff' }}>
                      {phase.icon}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f4f4f5' }}>{phase.stage}</h3>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
                    {phase.items.map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#a1a1aa' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: phase.status === 'completed' ? '#ffffff' : '#3f3f46' }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  {phase.status === 'completed' && (
                    <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}>
                      <Link to="/docs" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: '#ffffff', textDecoration: 'none' }}>
                        View Lessons <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div style={{ marginTop: 100, textAlign: 'center' }} className="gsap-slide-up">
          <div className="card" style={{ padding: '48px', background: 'linear-gradient(to bottom right, #1c1c1f, #111113)' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#f4f4f5', marginBottom: 16 }}>Ready to start your journey?</h2>
            <p style={{ color: '#71717a', marginBottom: 32 }}>Deep dive into any topic with our structured documentation and interactive code examples.</p>
            <Link to="/docs/java-intro" className="btn-primary" style={{ padding: '14px 32px' }}>
              Start Learning Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
