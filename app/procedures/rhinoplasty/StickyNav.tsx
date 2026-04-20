"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { id: "overview", label: "Overview" },
  { id: "procedure", label: "Procedure" },
  { id: "techniques", label: "Techniques" },
  { id: "surgeon", label: "Surgeon" },
  { id: "recovery", label: "Recovery" },
  { id: "journey", label: "Journey" },
  { id: "package", label: "Package" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
];

export default function StickyNav() {
  const [active, setActive] = useState<string>(items[0].id);
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = window.matchMedia("(min-width: 640px)").matches ? 80 : 64;
    const navOffset = 56;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset - navOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px" />
      <div
        className={`sticky top-16 z-40 bg-white/85 backdrop-blur-lg transition-colors duration-200 dark:bg-charcoal/85 sm:top-20 ${
          isStuck
            ? "border-b border-cream dark:border-champagne/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                active === item.id
                  ? "bg-gold/15 text-dark-gold dark:bg-gold/20 dark:text-gold"
                  : "text-charcoal/60 hover:bg-cream hover:text-charcoal dark:text-champagne/60 dark:hover:bg-champagne/5 dark:hover:text-champagne"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
