"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { procedureCategories } from "@/lib/procedures";
import { navItems } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center text-charcoal dark:text-champagne"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          {isOpen ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/30 sm:top-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed right-0 top-16 z-50 h-[calc(100dvh-4rem)] w-80 max-w-full overflow-y-auto bg-white shadow-xl dark:bg-charcoal sm:top-20 sm:h-[calc(100dvh-5rem)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="flex flex-col p-6">
          {/* Procedures accordion */}
          <div className="border-b border-cream pb-4 dark:border-champagne/10">
            <button
              onClick={() => toggleCategory("procedures")}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-charcoal dark:text-champagne"
            >
              Procedures
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-transform ${
                  expandedCategory === "procedures" ? "rotate-180" : ""
                }`}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            {expandedCategory === "procedures" && (
              <div className="mt-2 space-y-4 pl-4">
                {procedureCategories.map((cat) => (
                  <div key={cat.slug}>
                    <button
                      onClick={() => toggleCategory(cat.slug)}
                      className="flex w-full items-center justify-between py-1 text-sm font-semibold text-dark-gold"
                    >
                      {cat.name}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={`transition-transform ${
                          expandedCategory === cat.slug ? "rotate-180" : ""
                        }`}
                      >
                        <path d="M4 6l4 4 4-4" />
                      </svg>
                    </button>

                    {expandedCategory === cat.slug && (
                      <div className="mt-1 space-y-3 pl-3">
                        {cat.subCategories.map((sub) => (
                          <div key={sub.slug}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 dark:text-champagne/40">
                              {sub.name}
                            </p>
                            <ul className="mt-1 space-y-1">
                              {sub.procedures.map((proc) => (
                                <li key={proc.slug}>
                                  <Link
                                    href={`/procedures/${cat.slug}/${proc.slug}`}
                                    className="text-sm text-charcoal/70 hover:text-gold dark:text-champagne/70 dark:hover:text-gold"
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
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Other nav items */}
          {navItems
            .filter((item) => !item.hasMegaMenu)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-cream py-3 text-sm font-medium text-charcoal transition-colors hover:text-gold dark:border-champagne/10 dark:text-champagne dark:hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

          {/* CTA */}
          <div className="mt-6">
            <Button
              href="/get-a-quote"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
