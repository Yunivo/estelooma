"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import type { NavSubItem } from "@/lib/types";

export default function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: NavSubItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <button
        className="flex items-center gap-1.5 text-sm font-medium text-charcoal/80 transition-colors hover:text-gold dark:text-champagne/70 dark:hover:text-champagne"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <div className="w-[22rem] overflow-hidden rounded-2xl border border-cream bg-white shadow-xl ring-1 ring-charcoal/[0.04] dark:border-champagne/10 dark:bg-[#1A1817] dark:ring-champagne/5">
            <ul className="p-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group block rounded-xl px-4 py-3 transition-colors hover:bg-cream dark:hover:bg-champagne/[0.06]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-charcoal transition-colors group-hover:text-gold dark:text-champagne">
                        {item.label}
                      </span>
                      <span className="text-charcoal/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-gold dark:text-champagne/30">
                        &rarr;
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1 text-xs leading-relaxed text-charcoal/55 dark:text-champagne/45">
                        {item.description}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
