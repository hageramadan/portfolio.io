"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function HomeComponent() {
  const {dict} = useLanguage();

  return (
      <div className="bg-hero h-[100vh]">
        <div className="px-6 xl:px-[23%] h-[90%] flex flex-col justify-center text-white space-y-5 animate-bottom">
          <p className="font-semibold uppercase tracking-wide">
           {dict.heroTitle}
          </p>

          <h1 className="text-[40px] md:text-[52px] font-bold leading-tight md:w-1/2 uppercase ">
            {dict.heroSubtitle}
          </h1>
 
          <p className="md:w-2/3 text-gray-200 leading-relaxed font-semibold text-[1rem] animate-slideBottom">
            {dict.heroDescription}
          </p>

          <button aria-label="got to portfolio page" className="w-fit  bg-pro text-white font-semibold px-6 py-3 rounded-sm cursor-pointer shadow-md hover:bg-transparent  border-pro transition-all duration-300 flex items-center gap-2">
            <Link href='/portfolio'>{dict.viewPortfolio}</Link>
          </button>
        </div>
      </div>
  );
}
