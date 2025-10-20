"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchHomeDataByLang } from "@/lib/api";
import { HeroSectionType } from "@/types/hero";
import { ServicesType } from "@/types/services";
import { SolutionsType } from "@/types/solutions";
import { useLanguage } from "./LanguageContext";
import { statisticsType } from "@/types/statistics";

type HomeData = {
  hero: HeroSectionType[];
  services: ServicesType[];
  solutions: SolutionsType[];
   statistics: statisticsType[];
};

type HomeDataContextType = {
  homeData: HomeData | null;
  loading: boolean;
  refetchHomeData: () => Promise<void>;
};

const HomeDataContext = createContext<HomeDataContextType>({
  homeData: null,
  loading: true,
  refetchHomeData: async () => {},
});

export const HomeDataProvider = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useLanguage();
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchHomeDataByLang(lang);
      const data = response?.data;

      setHomeData({
        hero: Array.isArray(data?.hero_section)
          ? data.hero_section
          : [data.hero_section].filter(Boolean),
        services: Array.isArray(data?.services) ? data.services : [],
        solutions: data?.solutions ? [data.solutions] : [],
         statistics: Array.isArray(data?.statistics) ? data.statistics : [],
      });
    } catch (err) {
      console.error("Error fetching home data:", err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, [lang]);

  return (
    <HomeDataContext.Provider
      value={{
        homeData,
        loading,
        refetchHomeData: fetchData,
      }}
    >
      {children}
    </HomeDataContext.Provider>
  );
};

export const useHomeData = () => useContext(HomeDataContext);
