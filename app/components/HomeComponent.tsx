"use client";
import Link from "next/link";
import { useHomeData } from "../../src/context/HomeDataContext";

export default function HomeComponent() {
  const { homeData, loading } = useHomeData();
  const heroItem = homeData?.hero_section;

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('/images/bg_1.jpg.webp')",
      }}
    >
      <div className="relative z-10 flex flex-col justify-center h-full text-white text-center md:text-start px-6 xl:px-[23%] space-y-6">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-6 w-32 bg-gray-300 rounded"></div>
            <div className="h-12 w-64 bg-gray-400 rounded"></div>
            <div className="h-4 w-96 bg-gray-300 rounded"></div>
            <div className="h-10 w-40 bg-gray-400 rounded"></div>
          </div>
        ) : (
          <>
            <p className="font-semibold uppercase tracking-wider text-gray-200">
              {heroItem?.title ?? "Welcome to Our Portfolio"}
            </p>

            <h1 className="text-[42px] md:text-[56px] font-bold leading-tight max-w-[650px] uppercase drop-shadow-md">
              {heroItem?.subtitle ?? "Creative & Modern Designs"}
            </h1>

            <p className="max-w-[600px] text-gray-200 leading-relaxed font-medium text-lg">
              {heroItem?.description ?? "We build beautiful and fast web experiences."}
            </p>

            <Link
              href="/portfolio"
              aria-label="View portfolio"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-pro cursor-pointer text-white font-semibold px-8 py-3 rounded-sm shadow-md transition-all duration-300 hover:opacity-90 hover:scale-[1.02]">
                {heroItem?.button_text ?? "View Portfolio"}
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
