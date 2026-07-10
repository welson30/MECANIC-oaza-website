import { Star } from "lucide-react";

export function ReviewCard({ name, text }: { name: string; text: string }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-display text-sm font-bold text-white">
          {initial}
        </div>
        <div>
          <div className="font-body text-sm font-semibold text-charcoal">{name}</div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-torque text-torque" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-steel-dark">&ldquo;{text}&rdquo;</p>
    </div>
  );
}
