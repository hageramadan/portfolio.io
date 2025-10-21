import { HomeData } from "../src/context/HomeDataContext";

export async function fetchHomeDataByLang(
  lang: "ar" | "en"
): Promise<HomeData> {
  const BASE_URL = process.env.NEXT_PUBLIC_HOME_API_URL ?? "";
  if (!BASE_URL) {
    console.warn("Missing NEXT_PUBLIC_HOME_API_URL — API calls will fail.");
    throw new Error("No API URL provided.");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch home data: ${response.status}`);
    }

    const data = await response.json();

    const result = data?.data ?? data;
    return result as HomeData;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
}
