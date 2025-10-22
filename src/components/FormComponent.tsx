import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { FormErrors, FormData } from "@/types/FormData";
import { FormComponentProps } from "@/types/Form";

export default function FormComponent({
  title,
  namePlaceHolder,
  emailPlaceHolder,
  subjectPlaceHolder,
  messagePlaceHolder,
  sendButton,
  className,
  persistKey, 
}: FormComponentProps & { persistKey?: string }) {
  const { dict } = useLanguage();
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMsg, setSuccessMsg] = useState<string>("");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (persistKey) {
      const saved = localStorage.getItem(`${persistKey}_temp`);
      if (saved) setFormData(JSON.parse(saved));
    }
  }, [persistKey]);

  useEffect(() => {
    if (persistKey) {
      localStorage.setItem(`${persistKey}_temp`, JSON.stringify(formData));
    }
  }, [formData, persistKey]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSuccessMsg(dict.successMessage);

      if (persistKey) {
       let existing;
        try {
          existing = JSON.parse(localStorage.getItem(persistKey) || "[]");
          if (!Array.isArray(existing)) existing = [];
        } catch {
          existing = [];
        }
        existing.push(formData);
        localStorage.setItem(persistKey, JSON.stringify(existing));


        localStorage.removeItem(`${persistKey}_temp`);
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = dict.nameRequired;
    else if (formData.name.trim().length < 3) newErrors.name = dict.nameTooShort;

    if (!formData.email.trim()) newErrors.email = dict.emailRequired;
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = dict.invalidEmail;

    if (!formData.message.trim()) newErrors.message = dict.messageRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputClass = (error?: string) =>
    `peer w-full border rounded-md p-3 pt-5 focus:outline-none transition-all duration-300 ${
      error ? "border-red-500" : "border-gray-300 focus:border-pro"
    }`;

  const labelClass = `absolute start-3 text-gray-400 transition-all duration-300
    peer-placeholder-shown:top-5
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-400
    peer-focus:top-1
    peer-focus:text-sm
    peer-focus:text-pro pointer-events-none`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 bg-white shadow-lg p-8 border border-gray-200 rounded-2xl relative animate-top"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#232429]">{title}</h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={inputClass(errors.name)}
            />
            <label className={`${labelClass} ${formData.name ? "top-1 text-sm text-pro" : ""}`}>
              {namePlaceHolder}
            </label>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="flex-1 relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={inputClass(errors.email)}
            />
            <label className={`${labelClass} ${formData.email ? "top-1 text-sm text-pro" : ""}`}>
              {emailPlaceHolder}
            </label>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className={`relative ${className}`}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
            className={inputClass(errors.subject)}
          />
          <label className={`${labelClass} ${formData.subject ? "top-1 text-sm text-pro" : ""}`}>
            {subjectPlaceHolder}
          </label>
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className={`${inputClass(errors.message)} h-32 resize-none`}
          ></textarea>
          <label className={`${labelClass} ${formData.message ? "top-1 text-sm text-pro" : ""}`}>
            {messagePlaceHolder}
          </label>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          aria-label="submit"
          className="bg-pro cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-[#b89f0a] transition-all duration-300"
        >
          {sendButton}
        </button>

        {successMsg && (
          <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md text-sm animate-fade-in">
            {successMsg}
          </div>
        )}
      </div>
    </form>
  );
}
