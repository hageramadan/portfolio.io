"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import { ClientsType } from "@/types/clients";

export default function Testimonial() {
  const { dict, lang } = useLanguage();
  const { homeData } = useHomeData();
  const isRTL = lang === "ar";

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
          title_job:
            client.title_job ||
            client.description ||
            fallbackTestimonial.title_job,
          description: fallbackTestimonial.description,
        }))
      : [fallbackTestimonial];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    const updatePages = () => {
      if (!sliderRef.current) return;
      const containerWidth = sliderRef.current.clientWidth;
      const cardWidth =
        (sliderRef.current.firstChild as HTMLElement)?.clientWidth || 1;
      const visibleCards = Math.floor(containerWidth / (cardWidth + 24)) || 1;
      const totalPages = Math.ceil(testimonials.length / visibleCards);
      setPages(totalPages);
    };

    updatePages();
    window.addEventListener("resize", updatePages);
    return () => window.removeEventListener("resize", updatePages);
  }, [testimonials.length]);

  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    isDown = true;
    if (!sliderRef.current) return;
    sliderRef.current.classList.add("cursor-grabbing");
    const pageX =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    startX = pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    if (!sliderRef.current) return;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const pageX =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth =
      (sliderRef.current.firstChild as HTMLElement)?.clientWidth || 1;
    const moveDistance = index * (cardWidth + 24);

    sliderRef.current.scrollTo({
      left: isRTL ? sliderRef.current.scrollWidth - moveDistance : moveDistance,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const currentScroll = slider.scrollLeft;
    scrollLeft = currentScroll;
    const cardWidth = (slider.firstChild as HTMLElement)?.clientWidth || 1;
    const index = Math.round(slider.scrollLeft / (cardWidth + 24));
    setActiveIndex(index);
  };

  return (
    <div className="px-6 md:mx-[2%] py-16 select-none mt-[125rem] custom:mt-[50%] sm:mt-[60rem] lg:mt-[35rem] animate-bottom">
      <div className="mb-10 text-center">
        <p className="text-pro font-semibold uppercase mb-2">
          {dict.WhatClientsSay}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
          {dict.Testimonials}
        </h2>
      </div>

      <div
        ref={sliderRef}
        dir={isRTL ? "rtl" : "ltr"}
        className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth cursor-grab"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleDrag}
        onTouchStart={startDragging}
        onTouchMove={handleDrag}
        onTouchEnd={stopDragging}
        onScroll={handleScroll}
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 md:w-96 justify-center flex flex-col 
              h-60 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <p className="text-gray-700 mb-4 italic">"{t.description}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={t.logo || fallbackImage}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 12rem"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-[1rem] text-pro">{t.title_job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            aria-label="see more clients comments"
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-pro" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
