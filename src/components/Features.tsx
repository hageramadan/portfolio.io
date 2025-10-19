"use client";
import React, { useEffect } from "react";
import FeatureCard from "./featureCard";
import {
  faChartColumn,
  faLaptopCode,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const featuresData = [
  { title: ["Digital", "Products"], icon: faLaptopCode },
  { title: ["Online", "Marketing"], icon: faBullhorn },
  { title: ["Graphic", "Design"], icon: faChartColumn },
  { title: ["Application", "Development"], icon: faChartColumn },
  { title: ["Web", "Development"], icon: faChartColumn },
  { title: ["UX/UI", "Design"], icon: faChartColumn },
];

export default function Features() {
  return (
    <div
      className="px-6 xl:px-[23%] py-12"
      style={{ backgroundImage: "url('/images/bg2.webp')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 ">
        <div className="flex flex-col justify-center w-full md:col-span-2 pb-2">
          <h2 className="text-3xl font-bold mb-4 text-white uppercase  leading-[1.4] tracking-[3px]">
            We Shape The <br /> Perfect Solutions
          </h2>
          <p className="text-[#999] mb-4">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>

        {featuresData.slice(0, 2).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            icon={feature.icon}
            className="text-white"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 w-full ">
        {featuresData.slice(2, 6).map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            icon={feature.icon}
            className="text-white"
          />
        ))}
      </div>
    </div>
  );
}
