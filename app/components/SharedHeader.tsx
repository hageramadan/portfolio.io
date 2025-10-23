'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "../../src/context/HomeDataContext";



const SharedHeader: React.FC<SharedHeaderType> = ({ pageTitle, blogTitle }) => {
  const { dict, lang } = useLanguage();
const { homeData } = useHomeData();
  const heroItem = homeData?.hero_section;
  const isBlogDetails = !!blogTitle;
  return (
    <div className={ `h-[65.5vh] text-white flex items-end`} style={{backgroundImage: `linear-gradient(rgba(35, 36, 41, 0.548), rgba(25, 25, 29, 0.603)),url(${heroItem?.image})`}}>
      <div className={`mx-6 xl:mx-[23%] pb-11 animate-bottom ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        <div className="text-xl flex items-center space-x-1 rtl:space-x-reverse">
 
          <Link  aria-label= "visit home page"
              rel="noopener noreferrer" href="/" className="flex items-center transition duration-150">
            <span className="hover:text-pro transition duration-150">{dict.home}</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={`text-[#e0e0e0] text-[1rem] mt-1.5 mx-1 ${
                lang === 'ar' ? 'rotate-180' : ''
              }`}
            />
          </Link>

          {isBlogDetails && (
            <>
              <span className="text-[#e0e0e0] capitalize">{dict.blog}</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={`text-[#e0e0e0] text-[1rem] mt-1.5 mx-1 ${lang === 'ar' ? 'rotate-180' : ''}`}
              />
            </>
          )}

          <span className="text-[#e0e0e0] capitalize">{isBlogDetails ? blogTitle : pageTitle}</span>
        </div>

        <h2 className="text-[3rem] font-bold uppercase mt-2">
          {isBlogDetails ? blogTitle : pageTitle}
        </h2>
      </div>
    </div>
  );
};

export default SharedHeader;
