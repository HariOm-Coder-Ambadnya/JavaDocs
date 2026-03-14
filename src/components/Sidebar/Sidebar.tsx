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
          position: 'sticky', top: 62,
          height: 'calc(100vh - 62px)',
          width: 252, minWidth: 252, flexShrink: 0,
          background: '#111113',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          overflowY: 'auto',
          transition: 'transform 0.3s',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 16px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#52525b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Documentation
          </span>
          <button onClick={onClose} className="lg:hidden" style={{ background: 'none', border: 'none', color: '#52525b', cursor: 'pointer', padding: 2 }}>
            <X size={15} />
          </button>
        </div>

        <nav style={{ padding: '8px 8px 64px' }}>
          {SIDEBAR_SECTIONS.map(section => {
            const isExp = expanded[section.id]
            const hasActive = section.items.some(i => i.id === lessonId)
            const Icon = ICON_MAP[section.iconName]

            return (
              <div key={section.id} style={{ marginBottom: 2 }}>
                <button onClick={() => toggle(section.id)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 8,
                  padding: '8px 10px', borderRadius: 7, textAlign: 'left',
                  background: hasActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: 'none', cursor: 'pointer', transition: 'background 0.15s',
                }}
                onMouseEnter={e => { if (!hasActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
                onMouseLeave={e => { if (!hasActive) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                >
                  {Icon && <Icon size={14} color={section.color} />}
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: hasActive ? '#f4f4f5' : '#71717a', textAlign: 'left' }}>
                    {section.label}
                  </span>
                  {isExp
                    ? <ChevronDown size={12} color="#52525b" />
                    : <ChevronRight size={12} color="#52525b" />}
                </button>

                {isExp && (
                  <div style={{
                    marginLeft: 10, marginTop: 2, paddingLeft: 14,
                    borderLeft: `1px solid ${section.color}30`,
                  }}>
                    {section.items.map(item => {
                      const active = item.id === lessonId
                      return (
                        <Link key={item.id} to={`/docs/${item.id}`} onClick={onClose} style={{
                          display: 'block', padding: '6px 10px', borderRadius: 6,
                          fontSize: 13, textDecoration: 'none', marginBottom: 1,
                          fontWeight: active ? 600 : 400,
                          color: active ? '#f4f4f5' : '#71717a',
                          background: active ? `${section.color}15` : 'transparent',
                          transition: 'all 0.15s',
                        }}
                        onMouseEnter={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.color = '#a1a1aa'; el.style.background = 'rgba(255,255,255,0.04)' }}}
                        onMouseLeave={e => { if (!active) { const el = e.currentTarget as HTMLElement; el.style.color = '#71717a'; el.style.background = 'transparent' }}}
                        >
                          {item.label}
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
