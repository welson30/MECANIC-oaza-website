import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { business } from "@/lib/business";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function CTASection({
  locale,
  dict,
  headline,
  subtext,
}: {
  locale: Locale;
  dict: Dictionary;
  headline?: string;
  subtext?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold text-paper sm:text-4xl">
          {headline ?? dict.cta.defaultHeadline}
        </h2>
        <p className="mt-4 text-steel-light">{subtext ?? dict.cta.defaultSubtext}</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={`/${locale}/book-appointment`}
            className="flex items-center justify-center gap-2 rounded-md bg-torque px-7 py-3.5 font-body text-sm font-semibold text-white transition-colors hover:bg-torque-dark"
          >
            <Calendar className="h-4 w-4" />
            {dict.hero.ctaBook}
          </Link>
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-7 py-3.5 font-body text-sm font-semibold text-paper transition-colors hover:border-torque hover:text-torque"
          >
            <Phone className="h-4 w-4" />
            {dict.nav.callNow} · {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
