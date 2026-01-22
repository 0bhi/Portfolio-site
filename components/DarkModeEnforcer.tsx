"use client";

import { useEffect } from "react";

export default function DarkModeEnforcer() {
  useEffect(() => {
    // Force dark mode on mount
    document.documentElement.classList.add("dark");
    
    // Prevent theme switching by observing class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          if (!document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.add("dark");
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

