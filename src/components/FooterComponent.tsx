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
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

interface FooterProps {
  className?: string;
}

export default function FooterComponent({ className }: FooterProps) {
  const { dict , lang} = useLanguage();

  return (
    <footer className={`bg-[#232429] text-white text-center text-sm md:text-base ${className}`}>
      <div className="px-6 custom-blog-margin xl:px-[23%] py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-start">
          <div>
            <h2 className="text-3xl font-bold text-pro uppercase mb-3">eroo</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {dict.footerDescription}
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-pro text-lg hover:text-white transition"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="text-pro text-lg hover:text-white transition"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="text-pro text-lg hover:text-white transition"
                />
              </a>
            </div>
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
                    className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
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
                    className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
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
                    className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
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
                    className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
                  />
                  {dict.blog}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase font-bold mb-4 text-pro">{dict.info}</h5>
            <ul className="space-y-3">
              {[
                dict.joinUs,
                dict.blog,
                dict.privacyPolicy,
                dict.termsConditions,
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-pro transition"
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                     className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
                    />
                    {item}
                  </a>
                </li>
              ))}
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
                        className={`text-pro text-xs  ${lang === 'ar' ? 'rotate-180' : ''} `}
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
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-pro mt-1"
                />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-pro" />
                <a href="tel:+23923929210" className="hover:text-pro">
                  +2 392 3929 210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-pro" />
                <a href="mailto:info@yourdomain.com" className="hover:text-pro">
                  info@yourdomain.com
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
