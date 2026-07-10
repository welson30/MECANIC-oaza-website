type Variant =
  | "repair"
  | "diagnosing"
  | "tools"
  | "before-after"
  | "van"
  | "battery"
  | "suspension"
  | "driveway";

const paths: Record<Variant, JSX.Element> = {
  repair: (
    <>
      <circle cx="0" cy="-6" r="14" />
      <path d="M-10 8 L-4 20 L4 20 L10 8" />
      <path d="M-6 -2 L6 -2" />
    </>
  ),
  diagnosing: (
    <>
      <rect x="-14" y="-16" width="28" height="20" rx="2" />
      <path d="M-14 -6 L-22 -6" />
      <path d="M14 -6 L22 -6" />
      <path d="M-6 4 L-6 14 M6 4 L6 14" />
      <path d="M-10 14 L10 14" />
    </>
  ),
  tools: (
    <>
      <path d="M-14 14 L2 -2" strokeLinecap="round" />
      <circle cx="8" cy="-8" r="7" />
      <path d="M-14 -14 L-4 -14 L-4 -4 L-14 -4 Z" />
    </>
  ),
  "before-after": (
    <>
      <line x1="0" y1="-18" x2="0" y2="18" />
      <circle cx="-9" cy="0" r="12" />
      <path d="M9 -12 L9 12 M4 -6 L14 -6 M4 6 L14 6" />
    </>
  ),
  van: (
    <>
      <path d="M-18 10 L-18 -4 L-10 -12 L10 -12 L18 -4 L18 10" />
      <line x1="-18" y1="-2" x2="18" y2="-2" />
      <circle cx="-10" cy="10" r="4" />
      <circle cx="10" cy="10" r="4" />
    </>
  ),
  battery: (
    <>
      <rect x="-14" y="-10" width="28" height="20" rx="2" />
      <line x1="-6" y1="-14" x2="-6" y2="-10" />
      <line x1="6" y1="-14" x2="6" y2="-10" />
      <line x1="-6" y1="0" x2="-1" y2="0" />
      <line x1="-3.5" y1="-2.5" x2="-3.5" y2="2.5" />
      <line x1="4" y1="0" x2="9" y2="0" />
    </>
  ),
  suspension: (
    <>
      <path d="M0 -18 L0 -10" />
      <path d="M0 -10 L-6 -7 L6 -3 L-6 1 L6 5 L0 8" />
      <path d="M0 8 L0 18" />
    </>
  ),
  driveway: (
    <>
      <path d="M-18 14 L-10 -8 L10 -8 L18 14" />
      <line x1="-14" y1="14" x2="14" y2="14" />
      <circle cx="-6" cy="14" r="3" />
      <circle cx="6" cy="14" r="3" />
    </>
  ),
};

export function GalleryIllustration({ variant }: { variant: Variant }) {
  return (
    <svg viewBox="-30 -30 60 60" role="img" aria-hidden="true" className="h-14 w-14">
      <g stroke="#FF5A1F" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {paths[variant]}
      </g>
    </svg>
  );
}

export type { Variant as GalleryIllustrationVariant };
