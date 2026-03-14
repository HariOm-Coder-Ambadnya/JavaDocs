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
    <div style={{ background: '#111113' }}>
      <Hero />

      {/* Courses */}
      <section style={{ padding: '100px 24px', background: '#0d0d0f' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }} className="gsap-slide-up">
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Courses</p>
              <h2 className="display" style={{ fontSize: 'clamp(26px,4vw,44px)', color: '#f4f4f5', maxWidth: 420 }}>
                Choose your learning path
              </h2>
            </div>
            <Link to="/docs" className="btn-ghost" style={{ fontSize: 13 }}>
              View all courses <ArrowRight size={14} />
            </Link>
          </div>

          <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px,1fr))', gap: 12 }}>
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
      <section style={{ padding: '100px 24px', background: '#111113', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          <div className="card gsap-slide-up" style={{
            background: 'linear-gradient(145deg, #1c1c1f 0%, #111113 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '60px 40px',
            borderRadius: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 40
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <p className="section-label" style={{ marginBottom: 14 }}>Join the Community</p>
              <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,44px)', color: '#f4f4f5', marginBottom: 18 }}>
                Connect with Fellow <br />Developers
              </h2>
              <p style={{ fontSize: 16, color: '#71717a', lineHeight: 1.7, marginBottom: 32, maxWidth: 480 }}>
                Join our private WhatsApp group to discuss Java patterns, get help with Spring Boot errors, and network with other learners building real-world applications.
              </p>
              <a href="https://chat.whatsapp.com/BpNJmQCNXb3DXRNDUfBCxV" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '14px 28px', fontSize: 15 }}>
                Join WhatsApp Group
              </a>
            </div>

            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}>
              {/* Decorative Circle */}
              <div style={{
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 0
              }} />

              <div style={{
                position: 'relative',
                zIndex: 1,
                padding: 16,
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 24,
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
              }}>
                <img src="/logo.png" alt="Community" style={{ width: 140, height: 140, borderRadius: 16, filter: 'grayscale(0.2)' }} />
                <div style={{
                  position: 'absolute',
                  bottom: -15,
                  right: -15,
                  background: '#22c55e',
                  padding: '8px 12px',
                  borderRadius: 12,
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: 700,
                  boxShadow: '0 8px 20px rgba(34,197,94,0.3)'
                }}>
                  ONLINE NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="card gsap-scale" style={{
            padding: '64px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            background: '#1c1c1f',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 500, height: 200,
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative' }}>
              <p className="section-label" style={{ marginBottom: 14 }}>Get started today</p>
              <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#f4f4f5', marginBottom: 14 }}>
                Start learning Java for free
              </h2>
              <p style={{ fontSize: 16, color: '#71717a', maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.7 }}>
                No sign-up required. Jump straight into the first lesson and start building your Java skills today.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/docs/java-intro" className="btn-primary">
                  Get started for free <ArrowRight size={15} />
                </Link>
                <Link to="/docs" className="btn-ghost">
                  Browse docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
