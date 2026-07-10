import Image from "next/image";

const items = [
  { src: "/images/gallery/jaguar-service.jpeg", alt: "Jaguar XJ serviced on-site, hood open in customer's driveway" },
  { src: "/images/gallery/hemi-engine-bay.jpeg", alt: "Clean HEMI V8 engine bay after service" },
  { src: "/images/gallery/night-service.jpeg", alt: "Evening mobile repair service, headlights on for visibility" },
  { src: "/images/gallery/suspension-repair.jpeg", alt: "Front suspension and strut assembly repair" },
  { src: "/images/gallery/timing-chain.jpeg", alt: "Timing chain and gear assembly close-up" },
  { src: "/images/gallery/valve-train.jpeg", alt: "Cylinder head and valve train detail" },
  { src: "/images/gallery/valve-cover.jpeg", alt: "Valve cover and camshaft repair in progress" },
  { src: "/images/gallery/strut-brace-detail.jpeg", alt: "Engine bay detail with strut brace installed" },
];

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.src}
          className="group relative aspect-square overflow-hidden rounded-lg border border-charcoal/10"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
