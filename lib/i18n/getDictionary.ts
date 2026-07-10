import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import { es } from "./dictionaries/es";
import type { Dictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { en, pt, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
