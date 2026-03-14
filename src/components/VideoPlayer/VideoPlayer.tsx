import { useState } from 'react'
import { Play, Youtube } from 'lucide-react'

interface Props { videoId: string; title?: string }

export default function VideoPlayer({ videoId, title }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ margin: '24px 0', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', background: '#161618', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 26, height: 26, background: '#ef4444', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Youtube size={13} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#f4f4f5' }}>{title ?? 'Video Lecture'}</div>
          <div style={{ fontSize: 11, color: '#52525b' }}>Click thumbnail to load</div>
        </div>
      </div>

      <div style={{ position: 'relative', background: '#0d0d0f', paddingTop: '56.25%' }}>
        {!loaded ? (
          <button onClick={() => setLoaded(true)} style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            cursor: 'pointer', border: 'none', padding: 0,
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 12 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(249,115,22,0.9)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(249,115,22,0.4)',
                transition: 'transform 0.2s',
              }}>
                <Play size={22} color="#fff" fill="#fff" style={{ marginLeft: 3 }} />
              </div>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 500, background: 'rgba(0,0,0,0.5)', padding: '5px 14px', borderRadius: 20 }}>
                Click to play
              </span>
            </div>
          </button>
        ) : (
          <iframe
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title ?? 'Video Lecture'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}
