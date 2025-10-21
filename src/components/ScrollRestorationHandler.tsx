"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestorationHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, [pathname]);

  return null;
}
