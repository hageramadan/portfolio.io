"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import { ClientsType } from "@/types/clients";

export default function Testimonial() {
  const { dict } = useLanguage();
  const { homeData } = useHomeData();

  const fallbackImage = "/images/staff-3.jpg.webp";
  const fallbackTestimonial: ClientsType = {
    logo: "/images/staff-1.jpg.webp",
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
    <div className=" px-6 md:mx-[2%] py-16 select-none mt-[125rem] custom:mt-[50%] sm:mt-[60rem] lg:mt-[35rem] animate-bottom">
      <div className="mb-10 text-center">
        <p className="text-pro font-semibold uppercase mb-2">{dict.WhatClientsSay}</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">{dict.Testimonials}</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay, FreeMode]}
        loop={false}
        freeMode={true}
      centeredSlides={false}
        autoplay={{ delay: 4000}}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        spaceBetween={24}
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
       
        className="py-6"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-between h-[12rem] p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
              <p className="text-gray-700 mb-4 italic flex-1">"{t.description}"</p>
              <div className={`flex items-center gap-4 mt-4  flex-row text-start`}>
                <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.logo || fallbackImage}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-black/80">{t.name}</h3>
                  <p className="text-[1rem] text-pro">{t.title_job}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="custom-pagination flex justify-center mt-6 gap-2"></div> */}
    </div>
  );
}
