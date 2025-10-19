"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faCogs,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

export default function Rate() {
  const numberRate = [
    { num: 1234, title: "Project Completed", icon: faFileLines },
    { num: 567, title: "Our Staff", icon: faUsers },
    { num: 89, title: "Services Provided", icon: faCogs },
    { num: 4321, title: "Happy Customers", icon: faSmile },
  ];

  const [counts, setCounts] = useState(numberRate.map(() => 0));

  useEffect(() => {
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
      numberRate.forEach((rate, index) => {
        let start = 0;
        const end = rate.num;
        const duration = 2000;
        const incrementTime = Math.ceil(duration / end);
        const counter = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });
          if (start === end) clearInterval(counter);
        }, incrementTime);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="rate-section"
      className="relative bg-cover bg-center bg-fixed py-20 px-6 xl:px-[23%] text-white animate-bottom"
      style={{ backgroundImage: "url('/images/bg_4.jpg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-white z-10">
        {numberRate.map((rating, index) => (
          <div
            key={index}
            className="flex flex-col p-6 gap-2 items-center rounded-xl transition-all duration-300"
          >
            <div className="bg-pro text-white p-4 rounded flex items-center justify-center">
              <FontAwesomeIcon icon={rating.icon} size="xl" />
            </div>
            <div className="text-center whitespace-nowrap">
              <h4 className="text-3xl font-bold mb-1">{counts[index]}</h4>
              <p className="text-sm tracking-wide uppercase">{rating.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
