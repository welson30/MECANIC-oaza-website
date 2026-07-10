import { Wrench } from "lucide-react";

export function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-xl border border-charcoal/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-torque/30 hover:shadow-md">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-charcoal transition-colors group-hover:bg-torque">
        <Wrench className="h-5 w-5 text-torque group-hover:text-white" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-charcoal">{title}</h3>
      <p className="text-sm leading-relaxed text-steel-dark">{description}</p>
    </div>
  );
}
