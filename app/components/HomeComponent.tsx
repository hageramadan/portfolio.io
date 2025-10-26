"use client";
import Link from "next/link";
import { useHomeData } from "../../src/context/HomeDataContext";

export default function HomeComponent() {
  const { homeData, loading } = useHomeData();
  const heroItem = homeData?.hero_section;

  return (
    <section
      className="relative hero min-h-screen w-full overflow-hidden bg-black aspect-[16/9]"
      // style={{
      //   backgroundImage: `
      //     linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)),
      //     url('/images/bg_1.jpg.avif')
      //   `,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="relative z-10 flex flex-col justify-center h-full text-white text-center md:text-start px-6 xl:px-[23%] space-y-6">
        {loading ? (
          <div className="animate-pulse space-y-3">
            <div className="h-6 w-32 bg-gray-300/50 rounded"></div>
            <div className="h-12 w-64 bg-gray-400/50 rounded"></div>
            <div className="h-4 w-96 bg-gray-300/50 rounded"></div>
            <div className="h-10 w-40 bg-gray-400/50 rounded"></div>
          </div>
        ) : (
          <>
            <p className="font-semibold uppercase tracking-wider text-gray-200 min-h-[24px]">
              {heroItem?.title || "Welcome to Our Portfolio"}
            </p>

            <h1 className="text-[42px] md:text-[56px] font-bold leading-tight max-w-[650px] uppercase drop-shadow-md min-h-[120px]">
              {heroItem?.subtitle || "Creative & Modern Designs"}
            </h1>

            <p className="max-w-[600px] text-gray-200 leading-relaxed font-medium text-lg min-h-[80px]">
              {heroItem?.description ||
                "We build beautiful and fast web experiences."}
            </p>

            <Link
              href="/portfolio"
              aria-label="View portfolio"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-pro cursor-pointer text-white font-semibold px-8 py-3 rounded-sm shadow-md transition-all duration-300 hover:opacity-90 hover:scale-[1.02] min-h-[48px]">
                {heroItem?.button_text || "View Portfolio"}
              </button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
