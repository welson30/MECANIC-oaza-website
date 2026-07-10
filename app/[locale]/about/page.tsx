import type { Metadata } from "next";
import { ShieldCheck, Wrench, Clock, MapPin } from "lucide-react";
import { StatReadout } from "@/components/StatReadout";
import { CTASection } from "@/components/CTASection";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.about.title, description: dict.meta.about.description };
}

export default function AboutPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);
  const icons = [ShieldCheck, Wrench, Clock, MapPin];

  return (
    <>
      <section className="bg-charcoal px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl">{dict.about.heading}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-light">{dict.about.subheading}</p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl">
          <StatReadout
            stats={[
              { label: dict.stats.yearsExperience, value: `${business.experienceYears}+` },
              { label: dict.stats.vehiclesServicedCareer, value: business.careerVehiclesServiced },
              { label: dict.stats.googleRating, value: `${business.rating.value.toFixed(1)} ★` },
              { label: dict.stats.countiesServed, value: "2" },
            ]}
          />
          <p className="mt-3 text-center text-xs text-steel">{dict.stats.careerNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold text-charcoal">{dict.about.storyHeading}</h2>
        <p className="mt-4 leading-relaxed text-steel-dark">{dict.about.storyP1}</p>
        <p className="mt-4 leading-relaxed text-steel-dark">{dict.about.storyP2}</p>
        <p className="mt-4 leading-relaxed text-steel-dark">{dict.about.storyP3}</p>
        <div className="mt-6 rounded-xl border border-torque/20 bg-torque/5 p-5 text-sm text-steel-dark">
          {dict.about.teamPhotoNote}
        </div>
      </section>

      <section className="bg-charcoal-light/[0.02] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 font-display text-2xl font-bold text-charcoal">{dict.about.valuesHeading}</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.map((value, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={value.title} className="rounded-xl border border-charcoal/10 bg-white p-6">
                  <Icon className="mb-3 h-6 w-6 text-torque" />
                  <h3 className="mb-2 font-display text-base font-semibold text-charcoal">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-steel-dark">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
