"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useHomeData } from "../context/HomeDataContext";

export default function HomeComponent() {
  const { dict } = useLanguage();
  const { homeData, loading } = useHomeData();  
  const heroItem = homeData?.hero?.[0];

  return (
    <div className="bg-hero h-[100vh] bg-cover bg-center bg-no-repeat relative">
      <div className="px-6 xl:px-[23%] h-[90%] flex flex-col justify-center text-white space-y-5 text-center md:text-start">
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
            <button className="w-fit bg-pro text-white font-semibold px-6 py-3 rounded-sm shadow-md mx-auto md:mx-0 transition-all duration-300">
              <Link href="/portfolio">
                {heroItem?.button_text || dict.viewPortfolio}
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
