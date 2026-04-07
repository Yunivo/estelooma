import Image from "next/image";
import Button from "@/components/ui/Button";
import HeroImages from "./HeroImages";

const heroImages = [
  "/images/hero/clean-skin-woman-natural-makeup-beauty-healthyskin-isolated-white-studio-shot-monochrome-gray-black-white.jpg",
  "/images/hero/woman-grey-dress-with-black-bag.jpg",
  "/images/hero/healthy-skin-female-girl-blonde-hair-portrait-color-background-studio-shot-monochrome-gray-black-white.jpg",
  "/images/hero/advanced-follicular-unit-extraction-fue-hair-transplant-bold-men.jpg",
  "/images/hero/picture-young-woman-portrait-high-quality-resolution.jpg",
];

export default function Hero() {
  return (
    <section className="relative -mt-20 min-h-[600px] overflow-hidden bg-white pt-20 dark:bg-[#0A0908] lg:min-h-[80vh]">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* White opacity overlay */}
      <div className="absolute inset-0 bg-white/80 dark:bg-[#0A0908]/90" />

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 sm:px-6 lg:min-h-[80vh] lg:px-8">
        {/* Left: Text content */}
        <div className="w-full py-20 lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-light leading-tight tracking-tight text-charcoal dark:text-champagne md:text-5xl lg:text-6xl">
            Where Beauty
            <br />
            is Curated
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 dark:text-champagne/60 md:text-lg">
            Expert cosmetic surgery, rhinoplasty, and weight loss procedures
            performed by world-class surgeons at JCI-accredited hospitals.
          </p>
          <div className="mt-10">
            <Button href="/get-a-quote" showArrow>
              Get a Free Quote
            </Button>
          </div>
        </div>

        {/* Right: Masonry images with parallax — absolute to fill full hero height */}
        <div className="absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block">
          <HeroImages images={heroImages} />
        </div>
      </div>
    </section>
  );
}
