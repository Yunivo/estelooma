"use client";

import { useState, useEffect } from "react";

export default function HeaderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md dark:bg-charcoal/80 dark:shadow-charcoal/20" : "bg-transparent"
      }`}
    >
      {children}
    </header>
  );
}
