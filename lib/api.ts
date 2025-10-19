export interface TestimonialType {
  img: string;
  name: string;
  role: string;
  text: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_HOME_API_URL;

export async function Herosection(): Promise<TestimonialType[]> {
  if (!BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_HOME_API_URL environment variable");
  }

  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const data = await res.json();

    const testimonials = data?.testimonials || data?.data?.testimonials || [];

    if (!Array.isArray(testimonials)) {
      console.warn("⚠️ Unexpected API structure:", data);
      return [];
    }

    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
