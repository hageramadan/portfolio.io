"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
interface TestimonialType {
  img: string;
  name: string;
  role: string;
  text: string;
}

export default function Testimonial() {
    const { dict } = useLanguage();
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


  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    isDown = true;
    if (!sliderRef.current) return;
    sliderRef.current.classList.add("cursor-grabbing");
    if ("touches" in e) {
      startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    } else {
      startX = e.pageX - sliderRef.current.offsetLeft;
    }
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
    let x;
    if ("touches" in e) {
      x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    } else {
      x = e.pageX - sliderRef.current.offsetLeft;
    }
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth =
      (sliderRef.current.firstChild as HTMLElement)?.clientWidth || 1;
    sliderRef.current.scrollTo({
      left: index * (cardWidth + 24), 
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

      <div
        ref={sliderRef}
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

 
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button aria-label="see more clients comments"
            key={index}
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
