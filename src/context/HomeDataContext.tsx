"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchHomeDataByLang } from "@/lib/api";
import { useLanguage } from "./LanguageContext";
import { HeroSectionType } from "@/types/hero";
import { ServicesType } from "@/types/services";
import { SolutionsType } from "@/types/solutions";
import { statisticsType } from "@/types/statistics";
import { ClientsType } from "@/types/clients";
import { faqsType } from "@/types/faqs";
import { skillsType } from "@/types/skills";
import {blogPostsType} from "@/types/blogPosts";
import { contactInfoType } from "@/types/contactInfo";
import { PartnerType } from "@/types/partner";
import { portfolioType } from "@/types/portfolio";
export type HomeData = {
  hero_section: HeroSectionType;
  services: ServicesType[];
  solutions: SolutionsType;
  statistics: statisticsType[];
  clients: ClientsType[];
  faqs: faqsType[];
  skills: skillsType[];
  blog_posts:blogPostsType[];
  contact_info:contactInfoType;
  partner:PartnerType[];
  portfolio:portfolioType[]

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
      const data = response; 
      setHomeData({
        hero_section:(data?.hero_section??{}) as HeroSectionType,
        services: Array.isArray(data?.services) ? data.services : [],
        solutions:(data?.solutions??{}) as SolutionsType,
        statistics: Array.isArray(data?.statistics) ? data.statistics : [],
        clients: Array.isArray(data?.clients) ? data.clients : [],
        faqs: Array.isArray(data?.faqs) ? data.faqs : [],
        skills: Array.isArray(data?.skills) ? data.skills : [],
        blog_posts: Array.isArray(data?.blog_posts)?data.blog_posts : [],
        contact_info:(data?.contact_info??{}) as contactInfoType,
        partner: Array.isArray(data?.partner) ? data.partner : [],
        portfolio: Array.isArray(data?.portfolio) ? data.portfolio : [],
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
