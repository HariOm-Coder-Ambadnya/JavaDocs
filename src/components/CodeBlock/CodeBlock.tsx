import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface Props { code: string; language?: string; title?: string }

function highlight(code: string, lang: string): string {
  if (lang === 'xml') {
    return code
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/(&lt;\/?[\w:.\-]+)/g,'<span class="hl-tag">$1</span>')
      .replace(/(&gt;)/g,'<span class="hl-tag">$1</span>')
      .replace(/([\w:\-]+=)(".*?")/g,'<span class="hl-attr">$1</span><span class="hl-str">$2</span>')
      .replace(/(<!--[\s\S]*?-->)/g,'<span class="hl-comment">$1</span>')
  }
  return code
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/(\/\/[^\n]*)/g,'<span class="hl-comment">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="hl-comment">$1</span>')
    .replace(/("(?:[^"\\]|\\.)*")/g,'<span class="hl-str">$1</span>')
    .replace(/('(?:[^'\\]|\\.)*')/g,'<span class="hl-str">$1</span>')
    .replace(/(@\w+)/g,'<span class="hl-annotation">$1</span>')
    .replace(/\b(public|private|protected|static|final|abstract|class|interface|extends|implements|new|return|void|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|throws|import|package|this|super|null|true|false|instanceof|enum|record|var)\b/g,'<span class="hl-kw">$1</span>')
    .replace(/\b(String|int|long|double|float|boolean|char|byte|short|Integer|Long|Double|Float|Boolean|List|Map|Set|Optional|Object|Exception)\b/g,'<span class="hl-type">$1</span>')
    .replace(/\b(\d+[LlFfDd]?)\b/g,'<span class="hl-num">$1</span>')
}

export default function CodeBlock({ code, language = 'java', title }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')
  const highlighted = highlight(code, language).split('\n')

  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', margin: '24px 0' }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px', background: '#161618',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {['#ef4444','#f59e0b','#22c55e'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <span style={{ fontSize: 12, color: '#52525b', fontFamily: 'monospace' }}>
            {title ?? (language === 'xml' ? 'pom.xml' : `Example.${language}`)}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 11, color: '#3f3f46', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {language}
          </span>
          <button onClick={handleCopy} style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 10px', borderRadius: 5, fontSize: 11, fontWeight: 500,
            cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'monospace',
            background: copied ? 'rgba(34,197,94,0.12)' : '#1c1c1f',
            border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.08)'}`,
            color: copied ? '#22c55e' : '#71717a',
          }}>
            {copied ? <Check size={11}/> : <Copy size={11}/>}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Code */}
      <div style={{ background: '#0d0d0f', overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {lines.map((_, i) => (
              <tr key={i}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
              >
                <td style={{
                  width: 44, textAlign: 'right', padding: '1px 12px 1px 16px',
                  fontSize: 12, fontFamily: 'monospace', color: '#3f3f46',
                  userSelect: 'none', verticalAlign: 'top',
                }}>{i + 1}</td>
                <td style={{ padding: '1px 20px 1px 0', verticalAlign: 'top' }}>
                  <span style={{ fontSize: 13, fontFamily: 'monospace', lineHeight: 1.75, color: '#a1a1aa', display: 'block', whiteSpace: 'pre' }}
                    dangerouslySetInnerHTML={{ __html: highlighted[i] ?? '' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .hl-kw         { color: #a78bfa; }
        .hl-type       { color: #60a5fa; }
        .hl-str        { color: #86efac; }
        .hl-num        { color: #ffffff; }
        .hl-comment    { color: #4b5563; font-style: italic; }
        .hl-annotation { color: #fbbf24; }
        .hl-tag        { color: #f87171; }
        .hl-attr       { color: #fbbf24; }
      `}</style>
    </div>
  )
}
