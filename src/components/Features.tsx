"use client";
import React, { useEffect, useState } from "react";
import FeatureCard from "./featureCard";
import { ServicesType } from "@/types/services";
import { SolutionsType } from "@/types/solutions";
import { faChartColumn, faLaptopCode, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/app/loading";
import { useLanguage } from "@/src/context/LanguageContext";
import { fetchHomeDataByLang } from "@/lib/api";

export default function Features() {
  const [featuresData, setFeaturesData] = useState<ServicesType[]>([]);
  const [solutionData, setSolutionData] = useState<SolutionsType[]>([]);
  const [loading, setLoading] = useState(true);

  const { lang } = useLanguage(); // جلب اللغة الحالية

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await fetchHomeDataByLang(lang);

        if (data.services.length > 0) {
          const formatted = data.services.map((item) => {
            let icon;
            switch (item.icon) {
              case "laptop-code":
                icon = faLaptopCode;
                break;
              case "bullhorn":
                icon = faBullhorn;
                break;
              case "chart-column":
                icon = faChartColumn;
                break;
              default:
                icon = faLaptopCode;
            }
            return { ...item, icon };
          });
          setFeaturesData(formatted);
        }

        if (data.solutions.length > 0) {
          setSolutionData(data.solutions);
        }
      } catch (error) {
        console.error("Error fetching Features or Solutions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [lang]); // يتحدث تلقائيًا عند تغيير اللغة

  if (loading || featuresData.length === 0 || solutionData.length === 0) {
    return <Loading />;
  }

  const solution = solutionData[0];

  return (
    <div
      className="px-6 xl:px-[23%] py-12"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 md:text-start text-center">
        <div className="flex flex-col justify-center w-full md:col-span-2 pb-2">
          <h2 className="text-3xl font-bold mb-4 text-white uppercase leading-[1.4] tracking-[3px]">
            {solution.title}
          </h2>
          <p className="text-[#999] mb-4">{solution.description}</p>
        </div>

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
        {featuresData.slice(2, 6).map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.name}
            icon={feature.icon}
            className="text-white"
          />
        ))}
      </div>
    </div>
  );
}
