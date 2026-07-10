import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, MapPin, Calendar, MessageCircle, Mail } from "lucide-react";
import { business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.contact.title, description: dict.meta.contact.description };
}

export default function ContactPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-charcoal px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl">{dict.contact.heading}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-steel-light">{dict.contact.subheading}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={business.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md bg-torque px-6 py-3.5 font-body text-sm font-semibold text-white hover:bg-torque-dark"
          >
            <Phone className="h-4 w-4" />
            {dict.contact.callBtn}
          </a>
          <a
            href={business.smsHref}
            className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-body text-sm font-semibold text-paper hover:border-torque hover:text-torque"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.contact.textBtn}
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-body text-sm font-semibold text-paper hover:border-torque hover:text-torque"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.contact.whatsappBtn}
          </a>
          <Link
            href={`/${locale}/book-appointment`}
            className="flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-body text-sm font-semibold text-paper hover:border-torque hover:text-torque"
          >
            <Calendar className="h-4 w-4" />
            {dict.contact.bookBtn}
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6">
            <Phone className="mt-1 h-5 w-5 text-torque" />
            <div>
              <h3 className="font-display font-semibold text-charcoal">{dict.contact.phoneLabel}</h3>
              <a href={business.phoneHref} className="text-steel-dark hover:text-torque">
                {business.phone}
              </a>
              <p className="mt-1 text-xs text-steel">Call, text, or WhatsApp</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6">
            <Mail className="mt-1 h-5 w-5 text-torque" />
            <div>
              <h3 className="font-display font-semibold text-charcoal">{dict.contact.emailLabel}</h3>
              <a href={business.emailHref} className="text-steel-dark hover:text-torque">
                {business.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6">
            <Clock className="mt-1 h-5 w-5 text-torque" />
            <div>
              <h3 className="font-display font-semibold text-charcoal">{dict.contact.hoursLabel}</h3>
              <p className="text-steel-dark">{business.hours.display}</p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-xl border border-charcoal/10 bg-white p-6">
            <MapPin className="mt-1 h-5 w-5 text-torque" />
            <div>
              <h3 className="font-display font-semibold text-charcoal">{dict.contact.areaLabel}</h3>
              <p className="text-steel-dark">{business.serviceArea.join(", ")}</p>
            </div>
          </div>
        </div>

        <div className="flex aspect-square items-center justify-center rounded-xl border border-charcoal/10 bg-gradient-to-br from-charcoal-lighter to-charcoal md:aspect-auto">
          <span className="px-6 text-center font-mono text-xs uppercase tracking-widest text-steel-light">
            {dict.contact.mapNote}
          </span>
        </div>
      </section>
    </>
  );
}
