import Image from "next/image";

// Logo image lives at /public/images/logo/oaza-logo.png — drop the exported
// file there (see README "Logo" section). Using next/image so it's
// optimized automatically; swap the src if you re-export from Canva.

export function Logo({
  className = "",
  iconOnly = false,
}: {
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo/oaza-logo.png"
        alt="OAZA Mobile Mechanic logo"
        width={40}
        height={40}
        className="h-9 w-9 object-contain"
        priority
      />
      {!iconOnly && (
        <span className="font-display text-lg font-bold text-paper">
          OAZA <span className="font-normal text-steel-light">Mobile Mechanic</span>
        </span>
      )}
    </span>
  );
}
