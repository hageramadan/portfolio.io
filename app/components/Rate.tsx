"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";

export default function Rate() {
  const { homeData, loading } = useHomeData();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  const apiStatistics = useMemo(() => {
    if (!homeData?.statistics?.length) {
      return [
        { value: 134, metric: "Project Completed", icon: faFileLines },
        { value: 200, metric: "Happy Clients", icon: faUsers },
      ];
    }

    const icons = [faFileLines, faUsers, faSmile];

    return homeData.statistics.map((item, i) => ({
      value: item.value || 0,
      metric: item.metric || "Untitled",
      icon: icons[i % icons.length],
    }));
  }, [homeData]);

 
  const startCounting = () => {
    const duration = 2000; 
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const newCounts = apiStatistics.map((stat) =>
        Math.floor(stat.value * progress)
      );
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  
  useEffect(() => {
    if (!sectionRef.current || hasStarted || loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          startCounting();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [loading, hasStarted, apiStatistics]);

  
  if (loading) {
    return (
      <div className="py-10 text-center">
        <Loading />
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="rate-section"
      className="relative  py-20 px-6 xl:px-[23%] text-white overflow-hidden"
    >
    
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {apiStatistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl transition-transform duration-300 hover:scale-[1.05]"
          >
            <div className="bg-pro text-white p-4 rounded mb-3">
              <FontAwesomeIcon icon={stat.icon} size="xl" />
            </div>

            <h4 className="text-3xl font-bold mb-1">
              {counts[index] ?? 0}
            </h4>
            <p className="text-sm tracking-wide uppercase text-gray-300">
              {stat.metric}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
