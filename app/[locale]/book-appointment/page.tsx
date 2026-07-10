import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.booking.title, description: dict.meta.booking.description };
}

export default function BookAppointmentPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">{dict.booking.heading}</h1>
        <p className="mt-3 text-steel-dark">{dict.booking.subheading}</p>
        <a
          href={business.phoneHref}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-torque"
        >
          <Phone className="h-4 w-4" />
          {dict.booking.callPrefix} {business.phone}
        </a>
      </div>

      <div className="rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm sm:p-8">
        <AppointmentForm dict={dict} />
      </div>
    </section>
  );
}
