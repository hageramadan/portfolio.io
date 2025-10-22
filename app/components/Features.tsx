"use client";
import React, { useMemo } from "react";
import FeatureCard from "./featureCard";
import {
  faChartColumn,
  faLaptopCode,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "@/app/loading";
import { useHomeData } from "@/src/context/HomeDataContext";

const ICON_MAP: Record<string, any> = {
  "laptop-code": faLaptopCode,
  bullhorn: faBullhorn,
  "chart-column": faChartColumn,
};

export default function Features() {
  const { homeData, loading } = useHomeData();

  // 🧠 استخدم useMemo دايمًا قبل أي شرط
  const featuresData = useMemo(() => {
    if (!homeData?.services) return [];
    return homeData.services.slice(0, 6).map((item) => ({
      ...item,
      icon: ICON_MAP[item.icon] || faLaptopCode,
    }));
  }, [homeData]);

  // ✅ بعدين نعمل الشروط
  if (loading) return <Loading />;

  if (!homeData || featuresData.length === 0) {
    return <p className="text-center text-gray-400">No features available</p>;
  }

  const { solutions } = homeData;

  return (
    <section
      className="px-6 xl:px-[23%] py-12"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 md:text-start text-center">
        <header className="flex flex-col justify-center w-full md:col-span-2 pb-2">
          {solutions?.title && (
            <h2 className="text-3xl font-bold mb-4 text-white uppercase leading-[1.4] tracking-[3px]">
              {solutions.title}
            </h2>
          )}
          {solutions?.description && (
            <p className="text-[#999] mb-4">{solutions.description}</p>
          )}
        </header>

        {featuresData.slice(0, 2).map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.name}
            icon={feature.icon}
            className="text-white"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 w-full">
        {featuresData.slice(2).map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.name}
            icon={feature.icon}
            className="text-white"
          />
        ))}
      </div>
    </section>
  );
}
