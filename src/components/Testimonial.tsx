"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/src/context/LanguageContext";

interface TestimonialType {
  img: string;
  name: string;
  role: string;
  text: string;
}

export default function Testimonial() {
  const { dict, lang } = useLanguage();
  const testimonials: TestimonialType[] = [
    {
      img: "/images/staff-3.jpg.webp",
      name: "John Doe",
      role: "Designer",
      text: "This team did an amazing job! Highly recommended.",
    },
    {
      img: "/images/staff-1.jpg.webp",
      name: "Sarah Smith",
      role: "Developer",
      text: "Professional and creative work. Loved the results!",
    },
    {
      img: "/images/staff-3.jpg.webp",
      name: "Michael Lee",
      role: "Manager",
      text: "Exceeded our expectations in every way.",
    },
    {
      img: "/images/staff-1.jpg.webp",
      name: "Emily Clark",
      role: "Marketer",
      text: "Great collaboration and communication throughout.",
    },
    {
      img: "/images/staff-3.jpg.webp",
      name: "Michael Lee",
      role: "Manager",
      text: "Exceeded our expectations in every way.",
    },
    {
      img: "/images/staff-1.jpg.webp",
      name: "Emily Clark",
      role: "Marketer",
      text: "Great collaboration and communication throughout.",
    },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pages, setPages] = useState(1);

  const isRTL = lang === "ar";

  // 🧮 نحسب عدد الصفحات بناء على العرض الحالي
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

  // 🖱️ السحب والتمرير (نفس الكود القديم)
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
      left: isRTL
        ? sliderRef.current.scrollWidth - moveDistance
        : moveDistance,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const cardWidth =
      (sliderRef.current.firstChild as HTMLElement)?.clientWidth || 1;
    const scroll = sliderRef.current.scrollLeft;
    const index = Math.round(scroll / (cardWidth + 24));
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

      {/* Slider */}
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
            <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 12rem"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-[1rem] text-pro">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 ">
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
