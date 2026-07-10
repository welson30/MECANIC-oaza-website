"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: Locale) {
    setOpen(false);
    const segments = pathname.split("/");
    segments[1] = locale; // replace the current locale segment
    router.push(segments.join("/") || `/${locale}`);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-2 text-xs font-medium text-steel-light transition-colors hover:border-torque hover:text-paper"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.toUpperCase()}
        <ChevronDown className="h-3 w-3" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-white/10 bg-charcoal-lighter shadow-lg">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchTo(locale)}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-white/5 ${
                  locale === current ? "text-torque" : "text-steel-light"
                }`}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
