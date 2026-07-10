import type { Metadata } from "next";
import { Star } from "lucide-react";
import { ReviewCard } from "@/components/ReviewCard";
import { CTASection } from "@/components/CTASection";
import { reviews, business } from "@/lib/business";
import { getDictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  return { title: dict.meta.reviews.title, description: dict.meta.reviews.description };
}

export default function ReviewsPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = getDictionary(locale);

  return (
    <>
      <section className="bg-charcoal px-6 py-20 text-center">
        <div className="mx-auto mb-4 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-torque text-torque" />
          ))}
        </div>
        <h1 className="font-display text-4xl font-bold text-paper sm:text-5xl">
          {business.rating.value.toFixed(1)} {dict.reviewsPage.heading}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-steel-light">{dict.reviewsPage.subheading}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-steel">{dict.reviewsSection.moreComing}</p>
      </section>

      <CTASection locale={locale} dict={dict} headline={dict.reviewsPage.ctaHeadline} />
    </>
  );
}
