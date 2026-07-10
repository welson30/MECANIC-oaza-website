export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 360"
      role="img"
      aria-label="Illustration of a mobile mechanic service van parked next to a customer's car"
      className="h-full w-full"
    >
      <title>Mobile mechanic van servicing a customer&apos;s vehicle on-site</title>
      <rect width="480" height="360" fill="none" />

      {/* ground line */}
      <line x1="20" y1="300" x2="460" y2="300" stroke="#3A3F44" strokeWidth="2" />

      {/* service van */}
      <g stroke="#FF5A1F" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M40 300 L40 240 L60 210 L170 210 L170 300" />
        <path d="M170 300 L170 230 L230 230 L230 300" />
        <line x1="40" y1="230" x2="230" y2="230" />
        <circle cx="75" cy="300" r="16" fill="#14171A" />
        <circle cx="195" cy="300" r="16" fill="#14171A" />
        <rect x="65" y="215" width="35" height="25" rx="2" />
        <line x1="105" y1="245" x2="160" y2="245" strokeWidth="1.5" opacity="0.6" />
        <line x1="105" y1="260" x2="160" y2="260" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* wrench emblem on van */}
      <g transform="translate(120, 255)" stroke="#FAFAF9" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M0 20 L14 6" />
        <circle cx="17" cy="3" r="6" />
      </g>

      {/* customer car */}
      <g stroke="#9CA3AF" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M280 300 L280 265 L300 250 L400 250 L420 275 L440 275 L440 300" />
        <line x1="280" y1="275" x2="440" y2="275" />
        <circle cx="310" cy="300" r="15" fill="#14171A" />
        <circle cx="410" cy="300" r="15" fill="#14171A" />
      </g>

      {/* mechanic figure crouched at car */}
      <g stroke="#FAFAF9" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="255" cy="255" r="9" fill="#FAFAF9" stroke="none" />
        <path d="M255 264 L250 285 L260 285" />
        <path d="M255 270 L280 278" />
        <path d="M250 285 L240 300" />
        <path d="M260 285 L268 300" />
      </g>

      {/* subtle grid dots for texture */}
      <g fill="#3A3F44" opacity="0.4">
        <circle cx="30" cy="40" r="1.5" />
        <circle cx="70" cy="40" r="1.5" />
        <circle cx="110" cy="40" r="1.5" />
        <circle cx="30" cy="70" r="1.5" />
        <circle cx="70" cy="70" r="1.5" />
        <circle cx="110" cy="70" r="1.5" />
      </g>
    </svg>
  );
}
