"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { statistics } from "@/lib/constants";

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {inView ? displayed : value}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-charcoal py-20"
      aria-label="Statistics"
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-light text-champagne md:text-4xl lg:text-5xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-sm text-champagne/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
