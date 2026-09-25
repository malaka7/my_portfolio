const ROSE = '#E07A9A'
const GOLD = '#E5C396'
const LAV = '#D1C5D8'
const LINE = '#2D2236'

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#180F1E" />
      {children}
    </svg>
  )
}

function Grid() {
  return (
    <g stroke={LINE} strokeWidth="1" opacity="0.6">
      {[44, 88, 132, 176].map((y) => (
        <line key={y} x1="20" y1={y} x2="380" y2={y} />
      ))}
    </g>
  )
}

export function ProjectVisual({ variant }: { variant: string }) {
  switch (variant) {
    case 'market':
      return (
        <Frame>
          <Grid />
          <polyline
            points="20,170 70,150 120,155 170,110 220,120 270,70 320,80 380,40"
            fill="none"
            stroke={GOLD}
            strokeWidth="2.5"
          />
          <polyline
            points="20,190 70,185 120,175 170,165 220,150 270,140 320,120 380,110"
            fill="none"
            stroke={ROSE}
            strokeWidth="2.5"
            strokeDasharray="5 4"
          />
          {[20, 70, 120, 170, 220, 270, 320, 380].map((x, i) => (
            <rect key={x} x={x - 5} y={200} width="10" height={12 + (i % 4) * 6} fill={LAV} opacity="0.25" />
          ))}
        </Frame>
      )
    case 'heatmap':
      return (
        <Frame>
          <g>
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 10 }).map((__, c) => {
                const t = ((r * 10 + c) % 7) / 6
                const color = t > 0.66 ? ROSE : t > 0.33 ? GOLD : LAV
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={28 + c * 34}
                    y={24 + r * 28}
                    width="30"
                    height="24"
                    rx="3"
                    fill={color}
                    opacity={0.25 + t * 0.6}
                  />
                )
              }),
            )}
          </g>
        </Frame>
      )
    case 'distribution':
      return (
        <Frame>
          <Grid />
          <path
            d="M20,190 C80,190 90,60 150,60 C210,60 210,150 270,150 C320,150 340,120 380,120 L380,200 L20,200 Z"
            fill={ROSE}
            opacity="0.2"
          />
          {Array.from({ length: 14 }).map((_, i) => {
            const h = [40, 70, 110, 150, 120, 90, 60, 45, 65, 95, 130, 80, 55, 35][i]
            return (
              <rect key={i} x={24 + i * 26} y={200 - h} width="16" height={h} rx="3" fill={i % 2 ? GOLD : LAV} opacity="0.7" />
            )
          })}
        </Frame>
      )
    case 'circuit':
      return (
        <Frame>
          {/* board */}
          <rect x="40" y="60" width="150" height="100" rx="8" fill="#1E3A34" stroke={GOLD} strokeWidth="1.5" opacity="0.9" />
          <rect x="52" y="72" width="40" height="26" rx="3" fill="#0f221e" stroke={LAV} strokeWidth="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={50 + i * 22} y={140} width="10" height="10" fill={GOLD} opacity="0.5" />
          ))}
          {/* LCD */}
          <rect x="230" y="50" width="130" height="60" rx="6" fill="#12241f" stroke={ROSE} strokeWidth="1.5" />
          <line x1="245" y1="72" x2="345" y2="72" stroke={GOLD} strokeWidth="2" opacity="0.7" />
          <line x1="245" y1="88" x2="320" y2="88" stroke={GOLD} strokeWidth="2" opacity="0.5" />
          {/* LDR sensor */}
          <circle cx="290" cy="160" r="18" fill="none" stroke={ROSE} strokeWidth="2" />
          <circle cx="290" cy="160" r="8" fill={ROSE} opacity="0.5" />
          {/* wires */}
          <path d="M190,90 C210,90 210,72 230,72" fill="none" stroke={GOLD} strokeWidth="1.5" />
          <path d="M190,120 C220,120 270,140 290,142" fill="none" stroke={ROSE} strokeWidth="1.5" strokeDasharray="4 3" />
        </Frame>
      )
    case 'erd':
      return (
        <Frame>
          {[
            { x: 30, y: 40, label: 'VEHICLE' },
            { x: 260, y: 30, label: 'SLOT' },
            { x: 150, y: 140, label: 'SESSION' },
          ].map((b) => (
            <g key={b.label}>
              <rect x={b.x} y={b.y} width="110" height="56" rx="6" fill="#1C1422" stroke={GOLD} strokeWidth="1.5" />
              <rect x={b.x} y={b.y} width="110" height="18" rx="6" fill={GOLD} opacity="0.15" />
              <text x={b.x + 55} y={b.y + 13} textAnchor="middle" fontSize="9" fill={GOLD} fontFamily="monospace">
                {b.label}
              </text>
              <line x1={b.x + 10} y1={b.y + 30} x2={b.x + 100} y2={b.y + 30} stroke={LINE} />
              <line x1={b.x + 10} y1={b.y + 42} x2={b.x + 100} y2={b.y + 42} stroke={LINE} />
            </g>
          ))}
          <path d="M140,68 C200,68 240,80 260,70" fill="none" stroke={ROSE} strokeWidth="1.5" />
          <path d="M90,96 C110,130 150,150 200,150" fill="none" stroke={ROSE} strokeWidth="1.5" strokeDasharray="4 3" />
        </Frame>
      )
    case 'app':
      return (
        <Frame>
          {/* phone */}
          <rect x="150" y="24" width="100" height="172" rx="14" fill="#1C1422" stroke={GOLD} strokeWidth="1.5" />
          <rect x="162" y="44" width="76" height="40" rx="6" fill={ROSE} opacity="0.25" />
          {[96, 116, 136].map((y, i) => (
            <rect key={y} x="162" y={y} width={i === 1 ? 50 : 76} height="12" rx="3" fill={LAV} opacity="0.4" />
          ))}
          <rect x="162" y="160" width="76" height="20" rx="6" fill={GOLD} opacity="0.6" />
          {/* award badge */}
          <g>
            <circle cx="316" cy="70" r="30" fill="none" stroke={GOLD} strokeWidth="2" />
            <circle cx="316" cy="70" r="22" fill={ROSE} opacity="0.2" />
            <text x="316" y="66" textAnchor="middle" fontSize="8" fill={GOLD} fontFamily="monospace">RISE</text>
            <text x="316" y="78" textAnchor="middle" fontSize="7" fill={LAV} fontFamily="monospace">TOP 500</text>
            <path d="M304,96 l4,18 l8,-6 l8,6 l4,-18" fill="none" stroke={GOLD} strokeWidth="2" />
          </g>
        </Frame>
      )
    default:
      return <Frame>{null}</Frame>
  }
}
