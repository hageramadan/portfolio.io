'use client';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLanguage } from "@/src/context/LanguageContext";
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

export default function Footer() {
  const { dict } = useLanguage();

  return (
    <div className="relative">
      <div className="absolute top-[-11rem] mt-[3rem] left-0 right-0 subs h-[247px] mx-6 custom-blog-margin xl:mx-[23%] rounded py-16 text-white flex items-center justify-center flex-col">
        <h2 className="font-bold uppercase text-3xl mb-6 leading-1.5">
          {dict.joinUsNewsletter}
        </h2>
        <p className="mb-4 text-white/80 text-[16px]">{dict.newsUpdate}</p>
        <div>
          <input
            type="text"
            className="border sub1 border-white w-80 p-2 bg-white text-gray-800"
            placeholder={dict.enterEmail}
          />
          <button className="p-2 bg-pro cursor-pointer" aria-label="submit">
            {dict.subscribe}
          </button>
        </div>
      </div>

      <footer className="bg-[#232429] text-white text-center pt-[7rem] text-sm md:text-base">
        <div className="px-6 custom-blog-margin xl:px-[23%] py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 text-start">
     
            <div className="text-start">
              <h2 className="text-3xl font-bold text-pro uppercase mb-3">
                eroo
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {dict.footerDescription}
              </p>
              <div className="flex gap-3 mt-2">
                <FontAwesomeIcon icon={faFacebook} className="text-pro text-lg hover:text-white transition" />
                <FontAwesomeIcon icon={faTwitterSquare} className="text-pro text-lg hover:text-white transition" />
                <FontAwesomeIcon icon={faInstagramSquare} className="text-pro text-lg hover:text-white transition" />
              </div>
            </div>

       
            <div>
              <h5 className="uppercase font-bold mb-4 text-pro">
                {dict.explore}
              </h5>
              <ul className="space-y-3">
                {[dict.about, dict.contact, dict.portfolio, dict.blog].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-2 hover:text-pro transition">
                      <FontAwesomeIcon icon={faAngleRight} className="text-pro text-xs" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

        
            <div>
              <h5 className="uppercase font-bold mb-4 text-pro">
                {dict.info}
              </h5>
              <ul className="space-y-3">
                {[dict.joinUs, dict.blog, dict.privacyPolicy, dict.termsConditions].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-2 hover:text-pro transition">
                      <FontAwesomeIcon icon={faAngleRight} className="text-pro text-xs" />
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
                {[dict.aboutUs, dict.blog, dict.contact, dict.careers].map((item) => (
                  <li key={item}>
                    <a href="#" className="flex items-center gap-2 hover:text-pro transition">
                      <FontAwesomeIcon icon={faAngleRight} className="text-pro text-xs" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

      
            <div>
              <h5 className="uppercase font-bold mb-4 text-pro">
                {dict.haveQuestions}
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-pro mt-1" />
                  <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
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
    </div>
  );
}
