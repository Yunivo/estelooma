"use client";

import { useState } from "react";
import { faqItems } from "./faqData";

export default function RhinoplastyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div
          key={item.question}
          className="overflow-hidden rounded-2xl border border-cream dark:border-champagne/10"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 bg-white p-5 text-left transition-colors hover:bg-cream/50 dark:bg-[#292524] dark:hover:bg-[#292524]/80"
            aria-expanded={openIndex === i}
          >
            <span className="text-sm font-semibold text-charcoal dark:text-champagne">
              {item.question}
            </span>
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-200 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>

          {openIndex === i && (
            <div className="border-t border-cream bg-white px-5 pb-5 pt-4 dark:border-champagne/10 dark:bg-[#292524]">
              <p className="text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
