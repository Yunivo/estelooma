"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroImages({ images }: { images: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Duplicate images to fill 3 columns with enough items
  const allImages = [...images, ...images, ...images];
  const col1 = allImages.filter((_, i) => i % 3 === 0);
  const col2 = allImages.filter((_, i) => i % 3 === 1);
  const col3 = allImages.filter((_, i) => i % 3 === 2);

  const columns = [
    { items: col1, speed: 0.3, offsetY: 80 },
    { items: col2, speed: 0.15, offsetY: 40 },
    { items: col3, speed: 0.25, offsetY: 20 },
  ];

  return (
    <div ref={containerRef} className="relative h-full overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 flex gap-3 px-4">
        {columns.map((col, colIdx) => (
          <div
            key={colIdx}
            className="flex w-1/3 flex-col gap-3 will-change-transform"
            style={{
              transform: `translateY(${col.offsetY - offset * col.speed}px)`,
            }}
          >
            {col.items.map((src, i) => (
              <div
                key={`${colIdx}-${i}`}
                className="relative aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover grayscale"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
