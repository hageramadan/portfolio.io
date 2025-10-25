import React, { useEffect, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "../loading";

export default function SubScrip() {
  const { dict } = useLanguage();
  const { homeData } = useHomeData();
  const heroItem = homeData?.hero_section?.image_subscribe;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!heroItem) {
      setImageError(true);
      return;
    }

    const img = new Image();
    img.src = heroItem;

    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [heroItem]);

  if (!imageLoaded && !imageError) {
    return (
      <div className="absolute top-[-11rem] mt-[3rem] left-0 right-0 px-6 xl:mx-[23%] py-16 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div
      className="absolute top-[-11rem] mt-[3rem] left-0 right-0 px-6 xl:mx-[23%]
      rounded py-16 text-white flex items-center justify-center flex-col"
      style={{
        background: imageError
          ? "var(--base-color)" 
          : `linear-gradient(var(--base-op)), url(${heroItem})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-bold uppercase text-3xl mb-6 ">
        {dict.joinUsNewsletter}
      </h2>
      <p className="mb-4 text-white/80 text-[16px]">{dict.newsUpdate}</p>
      <div>
        <input
          type="text"
          className="border sub1 border-white w-full md:w-80 p-2 bg-white text-gray-800"
          placeholder={dict.enterEmail}
        />
        <button
          className="px-2 py-[0.55rem] bg-pro cursor-pointer w-full md:w-min"
          aria-label="submit"
        >
          {dict.subscribe}
        </button>
      </div>
    </div>
  );
}
