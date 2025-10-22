"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 cursor-pointer end-6 z-[9999] px-2.5 py-3 rounded-full bg-pro text-white
        flex items-center justify-center
        transition-all duration-500 shadow-md hover:shadow-lg hover:scale-110
        hover:bg-gradient-to-r hover:from-pro hover:to-pro-max
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        ${visible ? "animate-slide-in" : ""}`}
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="transition-transform duration-500 hover:-translate-y-1"
      />
    </button>
  );
}
