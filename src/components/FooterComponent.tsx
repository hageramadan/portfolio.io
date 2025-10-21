"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";
import { contactInfoType } from "@/types/contactInfo";

interface FooterProps {
  className?: string;
}

export default function FooterComponent({ className }: FooterProps) {
  const { dict, lang } = useLanguage();
  const { homeData } = useHomeData();

  const contactInfo: contactInfoType | undefined = homeData?.contact_info;

  if (!contactInfo) return <Loading />;

  return (
    <footer
      className={`bg-[#232429] text-white text-center text-sm md:text-base ${className}`}
    >
      <div className="px-6 custom-blog-margin xl:px-[23%] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-start">
          <div>
            <h2 className="text-3xl font-bold text-pro uppercase mb-3">
              eroo
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {dict.footerDescription}
            </p>

            {contactInfo.social_media ? (
              <div className="flex gap-3 mt-2">
                {contactInfo.social_media.facebook && (
                  <a
                    href={contactInfo.social_media.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-pro text-lg hover:text-white transition"
                    />
                  </a>
                )}
                {contactInfo.social_media.twitter && (
                  <a
                    href={contactInfo.social_media.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      className="text-pro text-lg hover:text-white transition"
                    />
                  </a>
                )}
                {contactInfo.social_media.instagram && (
                  <a
                    href={contactInfo.social_media.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      className="text-pro text-lg hover:text-white transition"
                    />
                  </a>
                )}
                {contactInfo.social_media.linkedin && (
                  <a
                    href={contactInfo.social_media.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="text-pro text-lg hover:text-white transition"
                    />
                  </a>
                )}
                {contactInfo.social_media.youtube && (
                  <a
                    href={contactInfo.social_media.youtube}
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-pro text-lg hover:text-white transition"
                    />
                  </a>
                )}
              </div>
            ) : (
              <p className="text-gray-400 mt-2">No social links</p>
            )}
          </div>

          <div>
            <h5 className="uppercase font-bold mb-4 text-pro">
              {dict.explore}
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 hover:text-pro transition"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`text-pro text-xs ${
                      lang === "ar" ? "rotate-180" : ""
                    }`}
                  />
                  {dict.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 hover:text-pro transition"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`text-pro text-xs ${
                      lang === "ar" ? "rotate-180" : ""
                    }`}
                  />
                  {dict.contact}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 hover:text-pro transition"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`text-pro text-xs ${
                      lang === "ar" ? "rotate-180" : ""
                    }`}
                  />
                  {dict.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center gap-2 hover:text-pro transition"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`text-pro text-xs ${
                      lang === "ar" ? "rotate-180" : ""
                    }`}
                  />
                  {dict.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase font-bold mb-4 text-pro">
              {dict.info}
            </h5>
            <ul className="space-y-3">
              {[dict.joinUs, dict.blog, dict.privacyPolicy, dict.termsConditions].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-pro transition"
                    >
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className={`text-pro text-xs ${
                          lang === "ar" ? "rotate-180" : ""
                        }`}
                      />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h5 className="uppercase font-bold mb-4 text-pro">
              {dict.company}
            </h5>
            <ul className="space-y-3">
              {[dict.aboutUs, dict.blog, dict.contact, dict.careers].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-pro transition"
                    >
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        className={`text-pro text-xs ${
                          lang === "ar" ? "rotate-180" : ""
                        }`}
                      />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h5 className="uppercase font-bold mb-4 text-pro">
              {dict.haveQuestions}
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-pro mt-1" />
                <p>{contactInfo.address || "No address available"}</p>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-pro" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-pro"
                >
                  {contactInfo.phone || "No phone number"}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-pro" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-pro"
                >
                  {contactInfo.email || "No email available"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1e1f23] bg-opacity-40 text-center text-[#ffffff80] text-sm py-8">
        © {new Date().getFullYear()} {dict.allRightsReserved} |
        <span className="text-pro font-semibold"> CoooooodeX</span>
      </div>
    </footer>
  );
}
