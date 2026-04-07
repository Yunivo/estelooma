"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { procedureCategories } from "@/lib/procedures";
import Container from "@/components/ui/Container";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState(
    procedureCategories[0].slug
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCategory = procedureCategories.find(
    (c) => c.slug === activeCategorySlug
  )!;

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
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <button
        className="text-sm font-medium text-charcoal/80 transition-colors hover:text-gold dark:text-champagne/70 dark:hover:text-champagne"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        Procedures
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-20 z-50">
          <div className="border-t border-cream bg-white shadow-xl dark:border-champagne/10 dark:bg-charcoal">
            <Container>
              <div className="grid grid-cols-[200px_1fr] gap-8 py-8">
                {/* Category tabs */}
                <div className="flex flex-col gap-1">
                  {procedureCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onMouseEnter={() => setActiveCategorySlug(cat.slug)}
                      onClick={() => setActiveCategorySlug(cat.slug)}
                      className={`rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${
                        activeCategorySlug === cat.slug
                          ? "bg-cream font-semibold text-charcoal dark:bg-champagne/10 dark:text-champagne"
                          : "text-charcoal/60 hover:text-charcoal dark:text-champagne/50 dark:hover:text-champagne"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Sub-categories + procedures */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
                  {activeCategory.subCategories.map((sub) => (
                    <div key={sub.slug}>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-dark-gold">
                        {sub.name}
                      </h4>
                      <ul className="space-y-1.5">
                        {sub.procedures.map((proc) => (
                          <li key={proc.slug}>
                            <Link
                              href={`/procedures/${activeCategory.slug}/${proc.slug}`}
                              className="text-sm text-charcoal/70 transition-colors hover:text-gold dark:text-champagne/60 dark:hover:text-champagne"
                              onClick={() => setIsOpen(false)}
                            >
                              {proc.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}
