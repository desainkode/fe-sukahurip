"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled more than 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[999] transition-all duration-1000 cubic-bezier(0.34, 1.56, 0.64, 1) transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-50 rotate-90 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#000E4F]/70 text-white shadow-[0_20px_50px_-10px_rgba(0,14,79,0.5)] backdrop-blur-2xl border border-white/20 transition-all duration-500 hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-[#072ac8] to-[#FFC400] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-30" />
        
        {/* Progress Rings */}
        <svg className="absolute inset-0 h-full w-full -rotate-90">
          {/* Static outer ring */}
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Progress ring */}
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="#FFC400"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray={188.5}
            strokeDashoffset={188.5 - (188.5 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
            style={{ filter: "drop-shadow(0 0 4px rgba(255, 196, 0, 0.5))" }}
          />
        </svg>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-0.5">
          {/* Arrow with Pulse Effect */}
          <div className="relative">
            <ChevronUp size={28} strokeWidth={2.5} className="transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
            <div className="absolute inset-0 -z-10 animate-ping opacity-0 group-hover:opacity-20">
              <ChevronUp size={28} strokeWidth={2.5} className="text-[#FFC400]" />
            </div>
          </div>
          
          {/* Percentage Indicator */}
          <div className="absolute -bottom-1 flex flex-col items-center opacity-0 transition-all duration-500 group-hover:bottom-2 group-hover:opacity-100">
            <span className="text-[9px] font-black leading-none tracking-tighter text-[#FFC400]">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-[-1px] -z-10 rounded-full bg-linear-to-tr from-[#072ac8] via-[#FFC400] to-[#072ac8] opacity-0 transition-opacity duration-500 group-hover:opacity-100" 
             style={{ padding: '1px', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
      </button>
    </div>
  );
}


