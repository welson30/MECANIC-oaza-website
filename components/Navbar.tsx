"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/lib/business";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

export function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/reviews`, label: dict.nav.reviews },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center">
          <Logo />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-steel-light transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher current={locale} />
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-mono text-sm text-paper transition-colors hover:text-torque"
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <Link
            href={`/${locale}/book-appointment`}
            className="rounded-md bg-torque px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-torque-dark"
          >
            {dict.nav.bookAppointment}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher current={locale} />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-paper"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-charcoal px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-base text-steel-light hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 font-mono text-base text-paper"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <Link
              href={`/${locale}/book-appointment`}
              onClick={() => setOpen(false)}
              className="rounded-md bg-torque px-5 py-3 text-center font-body text-sm font-semibold text-white"
            >
              {dict.nav.bookAppointment}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
