"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faCogs,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useHomeData } from "../context/HomeDataContext";
import Loading from "@/app/loading";

export default function Rate() {
  const { homeData, loading } = useHomeData();
  const icons = [faFileLines, faUsers];

  const defaultRates = [
    { value: 134, metric: "Project Completed", icon: faFileLines },
  
  ];

  const apiStatistics =
    homeData?.statistics && homeData.statistics.length > 0
      ? homeData.statistics.map((item: any, i: number) => ({
          value: item.value || defaultRates[i]?.value || 0,
          metric: item.metric || defaultRates[i]?.metric || "Untitled",
          icon: icons[i % icons.length] || faSmile,
        }))
      : defaultRates;

  const [counts, setCounts] = useState(apiStatistics.map(() => 0));

  useEffect(() => {
    if (loading || apiStatistics.length === 0) return;

    const handleScroll = () => {
      const section = document.getElementById("rate-section");
      if (
        section &&
        section.getBoundingClientRect().top < window.innerHeight - 100
      ) {
        startCounting();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const startCounting = () => {
      apiStatistics.forEach((rate, index) => {
        let start = 0;
        const end = rate.value || 0;
        const duration = 2000;
        const incrementTime = Math.ceil(duration / (end || 1));
        const counter = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
          if (start >= end) clearInterval(counter);
        }, incrementTime);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [apiStatistics, loading]);

  return (
    <div
      id="rate-section"
      className="relative shared py-20 px-6 xl:px-[23%] text-white animate-bottom"
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-white z-10">
        {loading ? (
         <Loading/>
        ) : (
          apiStatistics.map((rating, index) => (
            <div
              key={index}
              className="flex flex-col p-6 gap-2 items-center rounded-xl transition-all duration-300"
            >
              <div className="bg-pro text-white p-4 rounded flex items-center justify-center">
                <FontAwesomeIcon icon={rating.icon} size="xl" />
              </div>
              <div className="text-center whitespace-nowrap">
                <h4 className="text-3xl font-bold mb-1">{counts[index]}</h4>
                <p className="text-sm tracking-wide uppercase">
                  {rating.metric}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
