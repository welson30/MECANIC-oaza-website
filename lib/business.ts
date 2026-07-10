// Single source of truth for business data (facts, not display copy).
// Translated display text (service names, headings, etc.) lives in
// lib/i18n/dictionaries/*.ts — this file only holds the underlying facts
// that are the same in every language (phone number, hours, pricing).

export const business = {
  // Legal entity name (Florida LLC) — used in schema.org markup and legal
  // footer text. Different from the trading/brand name shown everywhere
  // else on the site.
  legalName: "OAZA LLC",
  name: "OAZA Mobile Mechanic",
  shortName: "OAZA Mobile Mechanic",
  tagline: "We Come To You",
  phone: "(850) 964-9612",
  phoneHref: "tel:+18509649612",
  smsHref: "sms:+18509649612",
  whatsappHref: "https://wa.me/18509649612",
  email: "btomic117@gmail.com",
  emailHref: "mailto:btomic117@gmail.com",
  hours: {
    display: "Every day, 7:00 AM – 9:00 PM",
    schema: "Mo-Su 07:00-21:00",
  },
  rating: {
    value: 5.0,
    scale: 5,
    reviewCount: 2, // real count — do not inflate
  },
  experienceYears: 15,
  // Career total across the technician's professional experience — NOT a
  // claim about OAZA's local Florida customer count. Keep this always
  // paired with "career" / "experience" framing, never presented alone as
  // "clients served by OAZA" to avoid misleading local customers.
  careerVehiclesServiced: "500+",
  serviceArea: ["Panama City Beach", "Bay County", "Walton County"],
  address: {
    locality: "Panama City Beach",
    region: "FL",
    country: "US",
  },
  social: {
    google: "", // add Google Business Profile URL when available
  },
} as const;

// Real customer testimonials — kept in the original language they were
// written in across ALL site locales. Translating a direct quote would
// mean putting words in a customer's mouth that they didn't say.
export const reviews = [
  {
    name: "Luan Felipe",
    text: "Great service, very honest and good guys.",
  },
  {
    name: "Jasmine Waiters",
    text: "Very responsive to requests. Can easily accommodate the situation depending on circumstances.",
  },
] as const;

export const transportPricing = {
  trailerRentalPrice: "$90/day",
} as const;
