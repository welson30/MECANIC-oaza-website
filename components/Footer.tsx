import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";
import { business } from "@/lib/business";
import { Logo } from "./Logo";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-steel-light">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="mb-3">
            <Logo />
          </div>
          <p className="max-w-xs text-sm leading-relaxed">{dict.footer.tagline}</p>
        </div>

        <div>
          <h3 className="mb-3 font-body text-sm font-semibold uppercase tracking-wide text-paper">
            {dict.footer.contactHeading}
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-torque" />
              <a href={business.phoneHref} className="hover:text-paper">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-torque" />
              <span>{business.hours.display}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-torque" />
              <span>{business.serviceArea.join(", ")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-body text-sm font-semibold uppercase tracking-wide text-paper">
            {dict.footer.navigateHeading}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              [dict.nav.about, `/${locale}/about`],
              [dict.nav.services, `/${locale}/services`],
              [dict.nav.gallery, `/${locale}/gallery`],
              [dict.nav.reviews, `/${locale}/reviews`],
              [dict.nav.contact, `/${locale}/contact`],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-paper">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-body text-sm font-semibold uppercase tracking-wide text-paper">
            {dict.footer.readyHeading}
          </h3>
          <Link
            href={`/${locale}/book-appointment`}
            className="inline-block rounded-md bg-torque px-5 py-2.5 text-sm font-semibold text-white hover:bg-torque-dark"
          >
            {dict.nav.bookAppointment}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-steel">
        © {new Date().getFullYear()} {business.legalName} · {business.name}. {dict.footer.rights}
      </div>
    </footer>
  );
}
