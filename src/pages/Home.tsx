import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero/Hero'
import CourseCard from '../components/Courses/CourseCard'
import Roadmap from '../components/Roadmap/Roadmap'
import Features from '../components/Features/Features'
import Integrations from '../components/Integrations/Integrations'
import { COURSES } from '../data/courses'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

export default function Home() {
  useScrollAnimations()

  return (
    <div style={{ background: '#000' }}>
      <Hero />

      {/* Courses */}
      <section style={{ padding: '120px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 60, flexWrap: 'wrap', gap: 16 }} className="gsap-slide-up">
            <div>
              <p className="tech-label" style={{ marginBottom: 16 }}>Documentation</p>
              <h2 className="modern-display" style={{ fontSize: 'clamp(32px,5vw,56px)', color: '#fff', maxWidth: 600 }}>
                Structured paths for <br /> every level.
              </h2>
            </div>
            <Link to="/docs" className="tech-label" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid #fff', paddingBottom: 4 }}>
              View all modules
            </Link>
          </div>

          <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 1 }}>
            {COURSES.map((course, i) => (
              <CourseCard key={course.id} course={course} idx={i} />
            ))}
          </div>
        </div>
      </section>

      <Roadmap />
      <Features />
      <Integrations />

      {/* Community Section */}
      <section style={{ padding: '120px 24px', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="gsap-slide-up" style={{
            background: '#080808',
            border: '1px solid rgba(255,255,255,0.05)',
            padding: '80px 60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 60
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <p className="tech-label" style={{ marginBottom: 20 }}>Network</p>
              <h2 className="modern-display" style={{ fontSize: 'clamp(32px,5vw,56px)', color: '#fff', marginBottom: 24 }}>
                Join the <br />Core Community
              </h2>
              <p style={{ fontSize: 13, color: '#71717a', lineHeight: 1.8, marginBottom: 40, maxWidth: 480, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Join our private network to discuss patterns, troubleshoot architecture, and build the future of Java.
              </p>
              <a href="https://chat.whatsapp.com/BpNJmQCNXb3DXRNDUfBCxV" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ 
                padding: '16px 40px', 
                borderRadius: 0,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Request Access
              </a>
            </div>

            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                position: 'relative',
                zIndex: 1,
                padding: 24,
                background: '#000',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <img src="/logo.png" alt="Community" style={{ width: 160, height: 160, filter: 'grayscale(1) contrast(1.2)' }} />
                <div style={{
                  position: 'absolute',
                  bottom: -10,
                  right: -10,
                  background: '#fff',
                  padding: '6px 12px',
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: '0.1em'
                }}>
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="gsap-scale" style={{
            padding: '100px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            background: '#fff',
            color: '#000'
          }}>
            <div style={{ position: 'relative' }}>
              <p className="tech-label" style={{ marginBottom: 20, color: '#000', opacity: 0.6 }}>Deployment</p>
              <h2 className="modern-display" style={{ fontSize: 'clamp(32px,5vw,64px)', color: '#000', marginBottom: 20 }}>
                Ready to Initialize?
              </h2>
              <p style={{ fontSize: 14, color: '#000', opacity: 0.7, maxWidth: 460, margin: '0 auto 40px', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Access the full suite of documentation and start your journey towards mastery.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
                <Link to="/docs" className="btn-primary" style={{ 
                  background: '#000', 
                  color: '#fff',
                  borderRadius: 0,
                  padding: '16px 40px',
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Start Learning
                </Link>
                <Link to="/docs" style={{ 
                  color: '#000', 
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  textDecoration: 'none',
                  borderBottom: '1.5px solid #000',
                  paddingBottom: 2
                }}>
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
