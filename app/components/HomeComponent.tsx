"use client";
import Link from "next/link";
import { useLanguage } from "../../src/context/LanguageContext";
import { useHomeData } from "../../src/context/HomeDataContext";

export default function HomeComponent() {
  const { dict } = useLanguage();
  const { homeData, loading } = useHomeData();
  const heroItem = homeData?.hero_section?.[0];

  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: heroItem?.image
          ? `linear-gradient(rgba(35,36,41,0.45), rgba(35,36,41,0.35)), url(${heroItem.image})`
          : "linear-gradient(rgba(35,36,41,0.45), rgba(35,36,41,0.35)), url('/images/bg_1.jpg.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 px-6 xl:px-[23%] h-full flex flex-col justify-center text-white space-y-5 text-center md:text-start">
        {loading ? (
          <>
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-12 w-64 bg-gray-100 animate-pulse rounded mt-2"></div>
            <div className="h-4 w-96 bg-gray-200 animate-pulse rounded mt-2"></div>
            <div className="h-10 w-40 bg-gray-300 animate-pulse rounded mt-4"></div>
          </>
        ) : (
          <>
            <p className="font-semibold uppercase tracking-wide">
              {heroItem?.title || dict.heroTitle}
            </p>

            <h1 className="text-[40px] md:text-[52px] font-bold leading-tight md:w-1/2 uppercase">
              {heroItem?.subtitle || dict.heroSubtitle}
            </h1>

            <p className="md:w-2/3 text-gray-200 leading-relaxed font-semibold text-[1rem]">
              {heroItem?.description || dict.heroDescription}
            </p>

            <Link
              aria-label="portfolio"
              rel="noopener noreferrer"
              href="/portfolio"
            >
              <button className="w-fit bg-pro cursor-pointer text-white font-semibold px-6 py-3 rounded-sm shadow-md mx-auto md:mx-0 transition-all duration-300 hover:opacity-90">
                {heroItem?.button_text || dict.viewPortfolio}
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
