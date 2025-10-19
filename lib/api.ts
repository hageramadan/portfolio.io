import { HeroSectionType } from "@/types/hero";


const BASE_URL = process.env.NEXT_PUBLIC_HOME_API_URL;

export async function Hero_section(): Promise<HeroSectionType[]> {
  if (!BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_HOME_API_URL environment variable");
  }

  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

   const HeroSection: HeroSectionType[] =
      data?.data?.hero_section && Array.isArray(data.data.hero_section)
        ? data.data.hero_section
        : [];

    if (!Array.isArray(HeroSection)) {
      console.warn("Unexpected API structure:", data);
      return [];
    }

    return HeroSection;
  } catch (error) {
    console.error("Error fetching HeroSection:", error);
    return [];
  }
}
