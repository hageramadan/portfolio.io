"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "../context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";

export default function HeadNavbar() {
  const [show, setShow] = useState(true);
  const { lang } = useLanguage();
  const { homeData, loading } = useHomeData();
  const isArabic = lang === "ar";

  const contactInfo = homeData?.contact_info;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <Loading />;

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
                <h5 className="cursor-pointer mx-1">
                  {contactInfo?.phone || "—"}
                </h5>
                <span className="text-white/65 mx-1"> | راسلنا على:</span>
                <h5 className="cursor-pointer">{contactInfo?.email || "—"}</h5>
              </>
            ) : (
              <>
                <span className="text-white/65">Phone no:</span>
                <h5 className="cursor-pointer mx-1">
                  {contactInfo?.phone || "—"}
                </h5>
                <span className="text-white/65 mx-1"> | Email us:</span>
                <h5 className="cursor-pointer">{contactInfo?.email || "—"}</h5>
              </>
            )}
          </div>

          <div
            className={`flex gap-5 cursor-pointer text-[0.9rem] ${
              isArabic ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {contactInfo?.social_media?.facebook && (
              <a
                href={contactInfo.social_media.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            )}
            {contactInfo?.social_media?.twitter && (
              <a
                href={contactInfo.social_media.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}
            {contactInfo?.social_media?.instagram && (
              <a
                href={contactInfo.social_media.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            )}
            {contactInfo?.social_media?.linkedin && (
              <a
                href={contactInfo.social_media.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            )}
            {contactInfo?.social_media?.youtube && (
              <a
                href={contactInfo.social_media.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            )}

            {!contactInfo?.social_media && (
              <FontAwesomeIcon
                icon={faDribbble}
                className="opacity-50 cursor-default"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
