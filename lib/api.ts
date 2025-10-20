import { HeroSectionType } from "@/types/hero";
import { ServicesType } from "@/types/services";
import { SolutionsType } from "@/types/solutions";

const BASE_URL = process.env.NEXT_PUBLIC_HOME_API_URL ?? "";

if (!BASE_URL) {
  console.warn("Missing NEXT_PUBLIC_HOME_API_URL — API calls will fail.");
}


export async function fetchHomeDataByLang(lang: "ar" | "en") {
  try {
    if (!BASE_URL) throw new Error("No API URL provided.");

    const response = await fetch(`${BASE_URL}?lang=${lang}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch home data: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Home data fetched for lang=${lang}:`, data);

    return data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
}



export async function getHeroSection(): Promise<HeroSectionType[]> {
  try {
    if (!BASE_URL) throw new Error("No API URL provided.");

    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    const data = await res.json();
    const heroSection = Array.isArray(data?.data?.hero_section)
      ? data.data.hero_section
      : [data.data.hero_section].filter(Boolean);

    return heroSection.length > 0 ? heroSection : [];
  } catch (error) {
    console.error("Error fetching Hero Section:", error);
    return [];
  }
}

export async function getServicesSection(): Promise<ServicesType[]> {
  try {
    if (!BASE_URL) throw new Error("No API URL provided.");

    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    const data = await res.json();
    const services = Array.isArray(data?.data?.services)
      ? data.data.services.filter((s: any) => s?.id)
      : [];

    return services.length > 0 ? services : [];
  } catch (error) {
    console.error("Error fetching Services Section:", error);
    return [];
  }
}

export async function getSolutionSection(): Promise<SolutionsType[]> {
  try {
    if (!BASE_URL) throw new Error("No API URL provided.");

    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`API Error: ${res.status}`);

    const data = await res.json();
    const solutions = data?.data?.solutions ? [data.data.solutions] : [];

    return solutions;
  } catch (error) {
    console.error("Error fetching Solutions Section:", error);
    return [];
  }
}
