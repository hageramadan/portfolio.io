"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/src/context/LanguageContext";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactUs() {
  const { dict } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = dict.nameRequired;
    else if (formData.name.trim().length < 3)
      newErrors.name = dict.nameTooShort;

    if (!formData.email.trim()) {
      newErrors.email = dict.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = dict.invalidEmail;
    }

    if (!formData.subject.trim()) newErrors.subject = dict.subjectRequired;
    if (!formData.message.trim()) newErrors.message = dict.messageRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setSuccessMsg(dict.successMessage);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="mx-6 custom-blog-margin xl:mx-[23%] mb-[9rem] py-16 transition-all duration-500">
        <div className="flex flex-col lg:flex-row gap-10">
          <form
            onSubmit={handleSubmit}
            className="flex-1 bg-white shadow-lg p-8 border border-gray-200 rounded-2xl relative animate-top"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#232429]">
              {dict.getInTouch}
            </h2>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder={dict.yourName}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 focus:outline-none transition-all ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 focus:border-pro"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="flex-1">
                  <input
                    type="text"
                    name="email"
                    placeholder={dict.yourEmail}
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 focus:outline-none transition-all ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-pro"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder={dict.subject}
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-3 focus:outline-none transition-all ${
                    errors.subject
                      ? "border-red-500"
                      : "border-gray-300 focus:border-pro"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder={dict.yourMessage}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-3 h-32 resize-none focus:outline-none transition-all ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 focus:border-pro"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-pro cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-[#b89f0a] transition-all duration-300"
              >
                {dict.sendMessage}
              </button>

              {successMsg && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm animate-fade-in">
                  {successMsg}
                </div>
              )}
            </div>
          </form>

          <div className="flex-1 bg-[#232429] text-white p-8 flex flex-col justify-center shadow-lg rounded-2xl  animate-bottom">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-pro">
              {dict.contactInfo}
            </h2>

            <div className="flex flex-col gap-6 text-base leading-relaxed">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-pro text-lg mt-1"
                />
                <p>{dict.address}</p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-pro text-lg"
                />
                <p>{dict.phone}</p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-pro text-lg"
                />
                <p>{dict.email}</p>
              </div>

              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="text-pro text-lg"
                />
                <p>{dict.website}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
