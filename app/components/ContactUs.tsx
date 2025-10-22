"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import { contactInfoType } from "@/types/contactInfo";
import Loading from "@/app/loading";
import FormComponent from "./FormComponent";

export default function ContactUs() {
  const { homeData } = useHomeData();
  const { dict } = useLanguage();
  const contactInfo: contactInfoType | undefined = homeData?.contact_info;

  return (
    <div className="mx-6 xl:mx-[23%] mb-[2.5rem] pt-16 transition-all duration-500">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        <div className="flex-1  w-fit">
          <FormComponent  
        
          title={dict.getInTouch}
          namePlaceHolder={dict.yourName}
          emailPlaceHolder={dict.yourEmail}
          subjectPlaceHolder={dict.subject}
          messagePlaceHolder={dict.yourMessage}
          sendButton={dict.sendMessage}
        />
        </div>
        

        <div className="flex-1 bg-[#232429] text-white p-8 flex flex-col justify-center shadow-lg rounded-2xl animate-bottom">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-pro">
            {dict.contactInfo}
          </h2>

          {contactInfo ? (
            <div className="flex flex-col gap-6 text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-pro text-lg mt-1"
                />
                <p className={!contactInfo.address ? "text-gray-400" : ""}>
                  {contactInfo.address || "No address available"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-pro text-lg" />
                <p className={!contactInfo.phone ? "text-gray-400" : ""}>
                  {contactInfo.phone || "No phone number"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-pro text-lg"
                />
                <p className={!contactInfo.email ? "text-gray-400" : ""}>
                  {contactInfo.email || "No email available"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGlobe} className="text-pro text-lg" />
                {contactInfo.website ? (
                  <a
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {contactInfo.website}
                  </a>
                ) : (
                  <p className="text-gray-400">No website available</p>
                )}
              </div>

              {contactInfo.social_media ? (
                <div className="flex gap-4 mt-3">
                  {contactInfo.social_media.instagram && (
                    <a
                      href={contactInfo.social_media.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-pro text-lg hover:text-white"
                      />
                    </a>
                  )}
                  {contactInfo.social_media.twitter && (
                    <a
                      href={contactInfo.social_media.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-pro text-lg hover:text-white"
                      />
                    </a>
                  )}
                  {contactInfo.social_media.linkedin && (
                    <a
                      href={contactInfo.social_media.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="text-pro text-lg hover:text-white"
                      />
                    </a>
                  )}
                  {contactInfo.social_media.youtube && (
                    <a
                      href={contactInfo.social_media.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="text-pro text-lg hover:text-white"
                      />
                    </a>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 mt-3">No social media links</p>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
