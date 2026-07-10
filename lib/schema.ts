import { business } from "./business";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    legalName: business.legalName,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    areaServed: business.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
    // NOTE: only include aggregateRating once you have enough real reviews
    // to make this credible. With 2 reviews, Google may discount or ignore it.
    // Swap this for a live Google Reviews embed when possible.
    ...(business.rating.reviewCount >= 5
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: business.rating.value,
            reviewCount: business.rating.reviewCount,
          },
        }
      : {}),
  };
}
