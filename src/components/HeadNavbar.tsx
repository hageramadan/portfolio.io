"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";

export default function HeadNavbar() {
  const [show, setShow] = useState(true);
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"} 
      className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <div className="bg-transparent py-2">
        <div
          className={`mx-10 md:mx-[23%] lg:flex items-center justify-between py-[10px] text-white hidden ${
            isArabic ? "flex-row-reverse text-right" : "flex-row text-left"
          }`}
        >
          <div
            className={`flex items-center gap-1 text-[0.8rem] ${
              isArabic ? "flex-row" : "flex-row"
            }`}
          >
            {isArabic ? (
              <>
                <span className="text-white/65">رقم الهاتف:</span>
                <h5 className="cursor-pointer mx-1">+00 1234 567</h5>
                <span className="text-white/65 mx-1">أو راسلنا على:</span>
                <h5 className="cursor-pointer">emailsample@email.com</h5>
              </>
            ) : (
              <>
                <span className="text-white/65">Phone no:</span>
                <h5 className="cursor-pointer mx-1">+00 1234 567</h5>
                <span className="text-white/65 mx-1">or email us:</span>
                <h5 className="cursor-pointer">emailsample@email.com</h5>
              </>
            )}
          </div>
          <div
            className={`flex gap-5 cursor-pointer text-[0.9rem] ${
              isArabic ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faDribbble} />
          </div>
        </div>
      </div>
    </div>
  );
}
