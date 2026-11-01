"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "@/lib/icons";
import { uiText } from "@/data";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "visible" : ""} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-purple-900`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={uiText.accessibility.scrollToTop}
      title={uiText.accessibility.backToTop}
    >
      <FaArrowUp size={18} aria-hidden="true" />
    </button>
  );
}

