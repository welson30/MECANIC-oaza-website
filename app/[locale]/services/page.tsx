import type { Metadata } from "next";
import Image from "next/image";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.services.title, description: dict.meta.services.description };
}

export default function ServicesPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-charcoal px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl">{dict.servicesPage.heading}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-light">{dict.servicesPage.subheading}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      <section className="bg-charcoal-light/[0.02] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-2 inline-block rounded-full bg-torque/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-torque-dark">
            {dict.transport.badge}
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold text-charcoal">{dict.transport.title}</h2>
          <p className="mb-8 max-w-2xl text-steel-dark">{dict.transport.description}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-charcoal/10">
              <Image
                src="/images/transport/vehicle-pickup.jpeg"
                alt="Vehicle being transported on OAZA's trailer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-charcoal/10">
              <Image
                src="/images/transport/trailer.jpeg"
                alt="OAZA's rental trailer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
