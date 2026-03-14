// Platform icons using SVG paths similar to reference UI

interface IconProps { size?: number; style?: React.CSSProperties }

export const JavaIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#ffffff" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969z"/>
    <path fill="#ffffff" d="M44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
    <path fill="#f4f4f5" d="M69.802 61.271c6.025 6.929-1.58 13.164-1.58 13.164s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.193z"/>
    <path fill="#ffffff" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468z"/>
    <path fill="#ffffff" d="M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.956 10.832-5.239 19.644-4.645 19.644-4.645z"/>
    <path fill="#f4f4f5" d="M90.433 93.208c23.451-12.19 12.617-23.896 5.039-22.315-1.854.385-2.682.72-2.682.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.827 23.73 0-.001.362-.32.47-.592z"/>
    <path fill="#f4f4f5" d="M76.491 1s12.586 12.593-11.952 31.946c-19.713 15.573-4.496 24.455-.007 34.585-11.495-10.374-19.92-19.512-14.271-28.005C58.665 26.872 81.02 20.883 76.491 1z"/>
    <path fill="#ffffff" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
  </svg>
)

export const SpringIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#22c55e" d="M116.985 18.655c-.948-2.979-4.225-8.816-9.608-13.484-1.422-1.249-3.064-2.259-4.668-3.159 4.418 6.433 6.319 13.527 6.319 13.527s-6.433-11.342-20.988-18.497c-13.021-6.426-25.705-3.938-33.078-2.16 0 0 .029-.011.029-.011 2.66-.607 15.929-3.064 30.3 4.236 16.074 8.143 21.447 22.12 21.447 22.12l.011-.003-.011.003s1.476 3.508 1.818 8.439c.394 5.645-.813 11.072-3.524 15.807-5.521 9.668-16.174 13.619-16.174 13.619s12.065-3.97 20.25-14.861c5.019-6.665 7.247-14.969 7.877-25.576zM113.34 31.028s-1.3-4.225-3.84-8.391c2.4 5.137 3.175 9.629 3.175 9.629l.665-1.238z"/>
    <path fill="#22c55e" d="M64 2C29.7 2 2 29.7 2 64s27.7 62 62 62 62-27.7 62-62S98.3 2 64 2zm34.8 87.5c-3.1 4.4-7.5 7.9-12.5 10.1L64 113.1l-22.3-13.5c-5-2.2-9.4-5.7-12.5-10.1-3.2-4.5-4.9-9.8-4.9-15.2V46l39.7-23 39.7 23v28.3c0 5.4-1.7 10.7-4.9 15.2z"/>
  </svg>
)

export const DockerIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#3b82f6" d="M116 54.6H104.1V42.7H92.3V30.9H68.7V19H56.9v11.9H45V42.7H33.2V54.6H21.3c-5.3 21.6 7.6 51.2 35.7 51.2h34c27.4 0 38.3-29.8 35.7-51.2H116z"/>
  </svg>
)

export const MavenIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#c0392b" d="M64 2L2 35v58l62 33 62-33V35L64 2zm0 8.6l54 28.7v49.4L64 117.4 10 88.7V39.3L64 10.6z"/>
    <path fill="#e74c3c" d="M64 22l-38 20.2v40L64 102.4l38-20.2V42.2L64 22z"/>
  </svg>
)

export const GradleIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#22c55e" d="M84.4 27.6c-11.3-11.3-28.2-13.7-42.2-7.2L63.4 41.6c5.1-1.5 10.7-.3 14.7 3.7 5.8 5.8 5.8 15.2 0 21-5.8 5.8-15.2 5.8-21 0-4-4-5.2-9.6-3.7-14.7L32.2 30.4c-6.5 14-4 30.9 7.2 42.2 13.1 13.1 33.8 14.5 48.5 4.1l23.5 23.5c2.3 2.3 6 2.3 8.3 0 2.3-2.3 2.3-6 0-8.3L96.2 68.4c10.4-14.7 9-35.4-4.1-48.5z"/>
  </svg>
)

export const HibernateIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#ec4899" d="M64 8L8 40v48l56 32 56-32V40L64 8zm0 8.8L112 44v40L64 111.2 16 84V44L64 16.8z"/>
    <path fill="#f472b6" d="M48 44v40h8V68h16v16h8V44h-8v16H56V44h-8z"/>
  </svg>
)

export const PostmanIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <circle cx="64" cy="64" r="56" fill="#ffffff" opacity="0.9"/>
    <path fill="#fff" d="M88 44c-2.2-2.2-5.4-2.9-8.3-2L56 65.7l-6.3-6.3-2.8 2.8 9.1 9.1L83.7 44.3c.9 1.5.7 3.5-.5 4.8L56 76.3l2.8 2.8 28.2-28.2c3.3-3.3 3.3-8.6 0-11.9.2 1.6-.5 3.4-2.1 4.9L56 83.1l-2.8-2.8L80.4 53l-2.8-2.8L50.4 77.5l-2.8-2.8 27.2-27.2-2.8-2.8L44.8 71.9c-3.1 3.1-3.1 8.1 0 11.2l9.1 9.1c3.1 3.1 8.1 3.1 11.2 0L88 59.2c2.2-2.2 2.9-5.4 2-8.3-.3-2.5-1.3-4.9-2.7-6.9z"/>
  </svg>
)

export const IntellijIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <rect width="128" height="128" rx="14" fill="#1c1c1f"/>
    <rect x="12" y="12" width="104" height="104" rx="8" fill="url(#ij-grad)"/>
    <defs>
      <linearGradient id="ij-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff"/>
        <stop offset="50%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
    <text x="20" y="85" fontSize="60" fontWeight="900" fill="#fff" fontFamily="serif">I</text>
    <rect x="20" y="90" width="44" height="5" fill="#fff" rx="2"/>
  </svg>
)

export const MySQLIcon = ({ size = 28 }: IconProps) => (
  <svg viewBox="0 0 128 128" width={size} height={size}>
    <path fill="#3b82f6" d="M2 69.3c0 32.2 26.1 58.3 58.3 58.3h7.4c32.2 0 58.3-26.1 58.3-58.3V58.7C126 26.5 99.9.4 67.7.4h-7.4C28.1.4 2 26.5 2 58.7v10.6z"/>
    <path fill="#fff" d="M38 88V40h8.5l16 27.7 16-27.7H87V88h-9.5V57.5L63 82h-2.5L47 57.5V88H38z"/>
  </svg>
)

// Combined integrations display
const INTEGRATIONS = [
  { name: 'Java 21',      Icon: JavaIcon,      color: '#ffffff' },
  { name: 'Spring Boot',  Icon: SpringIcon,    color: '#22c55e' },
  { name: 'Hibernate',    Icon: HibernateIcon, color: '#ec4899' },
  { name: 'Maven',        Icon: MavenIcon,     color: '#c0392b' },
  { name: 'Gradle',       Icon: GradleIcon,    color: '#22c55e' },
  { name: 'Docker',       Icon: DockerIcon,    color: '#3b82f6' },
  { name: 'Postman',      Icon: PostmanIcon,   color: '#ffffff' },
  { name: 'IntelliJ',     Icon: IntellijIcon,  color: '#a855f7' },
  { name: 'MySQL',        Icon: MySQLIcon,     color: '#3b82f6' },
]

export default function Integrations() {
  return (
    <section style={{ padding: '100px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }} className="gsap-slide-up">
        <p className="section-label" style={{ marginBottom: 14 }}>Integrations &amp; Tools</p>
        <h2 className="display" style={{ fontSize: 'clamp(28px,4vw,46px)', color: '#f4f4f5', marginBottom: 14 }}>
          Works with your toolchain
        </h2>
        <p style={{ fontSize: 16, color: '#71717a', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
          Learn to integrate seamlessly with the tools every Java developer uses daily.
        </p>
      </div>

      <div className="gsap-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: 12 }}>
        {INTEGRATIONS.map(({ name, Icon, color }) => (
          <div key={name} className="card" style={{
            padding: '20px 16px', textAlign: 'center',
            cursor: 'default', transition: 'border-color 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${color}40`; el.style.transform = 'translateY(-4px)' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.07)'; el.style.transform = 'translateY(0)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
              <Icon size={32} />
            </div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#71717a' }}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
