"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { useLanguage } from "@/src/context/LanguageContext";

export default function TeamMembers() {
   const { dict } = useLanguage();
  const team = [
    { img: "/images/staff-3.jpg.webp", name: "John Doe", role: "Designer" },
    { img: "/images/staff-1.jpg.webp", name: "Sarah Smith", role: "Developer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
    { img: "/images/staff-3.jpg.webp", name: "Michael Lee", role: "Manager" },
    { img: "/images/staff-1.jpg.webp", name: "Emily Clark", role: "Marketer" },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const startDragging = (e: React.MouseEvent) => {
    isDown = true;
    if (!sliderRef.current) return;
    sliderRef.current.classList.add("grabbing");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    if (!sliderRef.current) return;
    sliderRef.current.classList.remove("grabbing");
  };

  const move = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const touchStart = (e: React.TouchEvent) => {
    isDown = true;
    if (!sliderRef.current) return;
    startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const touchMove = (e: React.TouchEvent) => {
    if (!isDown || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const touchEnd = () => {
    isDown = false;
  };

  return (
    <div className="mx-6 md:mx-[8%] py-16 select-none animate-bottom">
    
        <div className="mb-10">
          <p className="text-pro font-semibold uppercase">
           {dict.teamTitle}
            <i className="fas fa-arrow-right"></i>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            {dict.teamSubtitle} <br /> {dict.creativeTeam}
          </h2>
        </div>
       



      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-scroll custom-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={move}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group bg-white"
          >
            <Image
              src={member.img}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 16rem"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-pro/10 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-pro w-0 group-hover:w-1/2 transition-all duration-500"></div>
              <div className="absolute inset-y-0 right-0 bg-pro w-0 group-hover:w-1/2 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-black">{member.role}</p>
                </div>

                <div className="flex gap-4 text-lg mt-2 transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <a href="#" className="hover:text-black transition-colors">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
