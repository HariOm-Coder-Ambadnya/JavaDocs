import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, ChevronRight, X } from 'lucide-react'
import { SIDEBAR_SECTIONS } from '../../data/lessons'
import { ICON_MAP } from '../../utils/getIcon'

interface Props { isOpen: boolean; onClose: () => void }

export default function Sidebar({ isOpen, onClose }: Props) {
  const { lessonId } = useParams()

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    SIDEBAR_SECTIONS.forEach(s => {
      init[s.id] = s.items.some(i => i.id === lessonId)
    })
    return init
  })

  const toggle = (id: string) => setExpanded(p => ({ ...p, [id]: !p[id] }))

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div onClick={onClose} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
          zIndex: 30, backdropFilter: 'blur(4px)',
        }} className="lg:hidden" />
      )}

      <aside
        className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        style={{
          position: 'fixed', top: 0, left: 0,
          height: '100vh',
          width: 280, flexShrink: 0,
          background: '#000',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          overflowY: 'auto',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 500,
        }}
      >
        {/* Header */}
        <div style={{
          padding: '32px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <span className="tech-label" style={{ fontSize: 9, color: '#fff', opacity: 0.2, display: 'block' }}>SYSTEM // VERSION</span>
            <span className="modern-display" style={{ fontSize: 13, color: '#fff' }}>Kernel.base</span>
          </div>
          <button onClick={onClose} className="lg:hidden" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.5 }}>
            <X size={18} />
          </button>
        </div>

        <nav style={{ padding: '20px 12px' }}>
          {SIDEBAR_SECTIONS.map(section => {
            const isExp = expanded[section.id]
            const hasActive = section.items.some(i => i.id === lessonId)

            return (
              <div key={section.id} style={{ marginBottom: 8 }}>
                <button onClick={() => toggle(section.id)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', textAlign: 'left',
                  background: hasActive ? 'rgba(255,255,255,0.03)' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
                >
                  <span className="modern-display" style={{ flex: 1, fontSize: 12, color: hasActive ? '#fff' : '#444', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {section.label}
                  </span>
                  {isExp
                    ? <ChevronDown size={14} color="#222" />
                    : <ChevronRight size={14} color="#222" />}
                </button>

                {isExp && (
                  <div style={{
                    marginLeft: 16, marginTop: 4, paddingLeft: 16,
                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                  }}>
                    {section.items.map(item => {
                      const active = item.id === lessonId
                      return (
                        <Link key={item.id} to={`/docs/${item.id}`} onClick={() => { if (window.innerWidth < 1024) onClose() }} style={{
                          display: 'block', padding: '8px 16px',
                          textDecoration: 'none', marginBottom: 4,
                          transition: 'all 0.2s',
                        }}
                        >
                          <span className="tech-label" style={{ 
                            fontSize: 9, 
                            color: active ? '#fff' : '#333',
                            fontWeight: active ? 800 : 700 
                          }}>
                            {item.label}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
