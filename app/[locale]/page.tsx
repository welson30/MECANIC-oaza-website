import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, ShieldCheck, Star, MapPin } from "lucide-react";
import { StatReadout } from "@/components/StatReadout";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { business, reviews } from "@/lib/business";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export default function HomePage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs text-steel-light">
              <Star className="h-3.5 w-3.5 fill-torque text-torque" />
              {business.rating.value.toFixed(1)} {dict.hero.badge}
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
              {dict.hero.headlinePrefix} <span className="text-torque">{dict.hero.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-steel-light">
              {dict.hero.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
                {dict.hero.ctaCall}
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-steel">
              <MapPin className="h-3.5 w-3.5" />
              {dict.hero.servingPrefix} {business.serviceArea.join(", ")}
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/hero/jaguar-service.jpeg"
                alt="OAZA mechanic servicing a customer's vehicle on-site"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16">
          <StatReadout
            stats={[
              { label: dict.stats.yearsExperience, value: `${business.experienceYears}+` },
              { label: dict.stats.vehiclesServicedCareer, value: business.careerVehiclesServiced },
              { label: dict.stats.googleRating, value: `${business.rating.value.toFixed(1)} ★` },
              { label: dict.stats.open, value: "7AM – 9PM" },
            ]}
          />
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-torque" />
        <h2 className="font-display text-2xl font-bold text-charcoal sm:text-3xl">
          {dict.aboutSnippet.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-steel-dark">{dict.aboutSnippet.text}</p>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-charcoal-light/[0.02] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-3xl font-bold text-charcoal">{dict.homeServices.heading}</h2>
              <p className="mt-2 text-steel-dark">{dict.homeServices.subheading}</p>
            </div>
            <Link href={`/${locale}/services`} className="font-body text-sm font-semibold text-torque hover:underline">
              {dict.homeServices.viewAll}
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.slice(0, 6).map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 font-display text-3xl font-bold text-charcoal">{dict.whyChooseUs.heading}</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dict.whyChooseUs.items.map((item) => (
            <div key={item.title} className="rounded-xl border border-charcoal/10 bg-white p-6">
              <h3 className="mb-2 font-display text-base font-semibold text-charcoal">{item.title}</h3>
              <p className="text-sm leading-relaxed text-steel-dark">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="bg-charcoal-light/[0.02] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 font-display text-3xl font-bold text-charcoal">{dict.reviewsSection.heading}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((r) => (
              <ReviewCard key={r.name} name={r.name} text={r.text} />
            ))}
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
