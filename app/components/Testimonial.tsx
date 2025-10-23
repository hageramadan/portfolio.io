"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import { ClientsType } from "@/types/clients";
import Loading from "../loading";

export default function Testimonial() {
  const { dict } = useLanguage();
  const { homeData, loading } = useHomeData();

  if (loading) return <Loading />;

  const fallbackImage = "/images/staff-3.jpg.webp";
  const fallbackTestimonial: ClientsType = {
    logo: "/images/fallback.avif",
    name: "Emily Clark",
    title_job: "Marketer",
    description: "Great collaboration and communication throughout.",
  };

  const testimonials: ClientsType[] =
    Array.isArray(homeData?.clients) && homeData.clients.length > 0
      ? homeData.clients.map((client: ClientsType) => ({
          logo:
            client.logo && client.logo.trim() !== ""
              ? client.logo.startsWith("http")
                ? client.logo
                : `/images/${client.logo}`
              : fallbackImage,
          name: client.name || fallbackTestimonial.name,
          title_job: client.title_job || fallbackTestimonial.title_job,
          description: client.description || fallbackTestimonial.description,
        }))
      : [fallbackTestimonial];

  return (
    <div className="px-6 md:mx-[8%] py-16 select-none animate-bottom mt-[10rem]">
      <div className="mb-10 text-center">
        <p className="text-pro font-semibold uppercase mb-2">
          {dict.WhatClientsSay}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
          {dict.Testimonials}
        </h2>
      </div>

      {/* ✅ صف أفقي قابل للتمرير */}
      <div
        className="
          flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
          py-4 px-2
        "
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              flex-shrink-0 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl
              transition-all duration-500 text-center
              w-[280px] sm:w-[300px] md:w-[350px]
            "
          >
            <p className="text-gray-700 italic mb-6">{t.description}</p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 relative rounded-full overflow-hidden mb-3">
                <Image
                  src={t.logo || fallbackImage}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-black/80">{t.name}</h3>
              <p className="text-pro text-sm">{t.title_job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
