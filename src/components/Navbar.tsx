"use client";
import { fetchHomeDataByLang } from "@/lib/api";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { dict, lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: dict.home, href: "/" },
    { name: dict.about, href: "/about" },
    { name: dict.portfolio, href: "/portfolio" },
    { name: dict.blog, href: "/blog" },
    { name: dict.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShowNav(currentScrollY <= lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLanguageChange = async () => {
  toggleLang();
};

  return (
    <div
      className={`fixed left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-white/10"
      } ${showNav ? "top-12 md:top-12" : "top-0"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-between w-full px-6 xl:px-[23%] font-bold py-[1rem]">
        <h2
          className={`logo text-[24px] cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          <Link href="/">eroo</Link>
        </h2>

        <ul className="hidden md:flex lg:flex gap-[2.7rem] text-[15px]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-pro"
                    : scrolled
                    ? "text-black hover:text-pro-max"
                    : "text-white hover:text-pro-max"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLanguageChange}
              className={
                scrolled ? "text-black cursor-pointer" : "text-white"
              }
            >
              <h2 className="cursor-pointer">
                {lang === "en" ? "العربية" : "English"}
              </h2>
            </button>
          </li>
        </ul>

        <button
          aria-label="open tag"
          className={`text-2xl md:hidden cursor-pointer transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FontAwesomeIcon icon={faX} size="sm" />
          ) : (
            <FontAwesomeIcon icon={faBarsStaggered} size="sm" />
          )}
        </button>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-4 bg-white text-black font-semibold py-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`transition-colors duration-300 ${
                pathname === link.href
                  ? "text-pro"
                  : "text-black hover:text-pro-max"
              }`}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <span>
            <button
              aria-label="change language"
              onClick={handleLanguageChange}
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
