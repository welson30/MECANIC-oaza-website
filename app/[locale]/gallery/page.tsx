import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTASection } from "@/components/CTASection";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.gallery.title, description: dict.meta.gallery.description };
}

export default function GalleryPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-charcoal px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl">{dict.gallery.heading}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-steel-light">{dict.gallery.subheading}</p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <GalleryGrid />
      </section>

      <CTASection locale={locale} dict={dict} />
    </>
  );
}
