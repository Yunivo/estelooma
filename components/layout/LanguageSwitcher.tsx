"use client";

import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm text-charcoal/70 transition-colors hover:text-charcoal dark:text-champagne/60 dark:hover:text-champagne"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="hidden text-xs font-medium sm:inline">{selected.code.toUpperCase()}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-charcoal/5 bg-white py-1 shadow-lg dark:border-champagne/10 dark:bg-gradient-end">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                selected.code === lang.code
                  ? "bg-cream/50 font-medium text-charcoal dark:bg-champagne/10 dark:text-champagne"
                  : "text-charcoal/70 hover:bg-cream/30 dark:text-champagne/60 dark:hover:bg-champagne/5"
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
