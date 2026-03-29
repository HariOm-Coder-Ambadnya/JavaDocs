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
          position: 'sticky', top: 70,
          height: 'calc(100vh - 70px)',
          width: 260, minWidth: 260, flexShrink: 0,
          background: '#050505',
          borderRight: '1px solid rgba(255,255,255,0.04)',
          overflowY: 'auto',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 40,
        }}
      >
        {/* Header */}
        <div style={{
          padding: '24px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.03)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span className="tech-label" style={{ fontSize: 9, color: '#fff', opacity: 0.3 }}>
            System // Kernel
          </span>
          <button onClick={onClose} className="lg:hidden" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', opacity: 0.5 }}>
            <X size={16} />
          </button>
        </div>

        <nav style={{ padding: '12px' }}>
          {SIDEBAR_SECTIONS.map(section => {
            const isExp = expanded[section.id]
            const hasActive = section.items.some(i => i.id === lessonId)
            const Icon = ICON_MAP[section.iconName]

            return (
              <div key={section.id} style={{ marginBottom: 4 }}>
                <button onClick={() => toggle(section.id)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px', textAlign: 'left',
                  background: hasActive ? 'rgba(255,255,255,0.03)' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { if (!hasActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)' }}
                onMouseLeave={e => { if (!hasActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  {Icon && <Icon size={14} color="#fff" style={{ opacity: hasActive ? 1 : 0.3 }} />}
                  <span className="modern-display" style={{ flex: 1, fontSize: 13, color: hasActive ? '#fff' : '#525252' }}>
                    {section.label}
                  </span>
                  {isExp
                    ? <ChevronDown size={14} color="#222" />
                    : <ChevronRight size={14} color="#222" />}
                </button>

                {isExp && (
                  <div style={{
                    marginLeft: 18, marginTop: 4, paddingLeft: 16,
                    borderLeft: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    {section.items.map(item => {
                      const active = item.id === lessonId
                      return (
                        <Link key={item.id} to={`/docs/${item.id}`} onClick={() => { if (window.innerWidth < 1024) onClose() }} style={{
                          display: 'block', padding: '10px 14px',
                          textDecoration: 'none', marginBottom: 2,
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.color = '#fff'; }}}
                        onMouseLeave={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.color = '#525252'; }}}
                        >
                          <span className="tech-label" style={{ 
                            fontSize: 10, 
                            color: active ? '#fff' : '#525252',
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
