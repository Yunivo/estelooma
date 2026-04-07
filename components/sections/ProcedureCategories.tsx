import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const procedures = [
  {
    title: "Rhinoplasty",
    href: "/procedures/rhinoplasty",
    image: "/images/procedures/rhinoplasty.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    title: "Body Contouring",
    href: "/procedures/cosmetic-surgery",
    image: "/images/procedures/body.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Breast Surgery",
    href: "/procedures/cosmetic-surgery",
    image: "/images/procedures/breast.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Face Surgery",
    href: "/procedures/cosmetic-surgery",
    image: "/images/procedures/face.jpg",
    className: "col-span-1 row-span-2",
  },
  {
    title: "Weight Loss",
    href: "/procedures/weight-loss",
    image: "/images/procedures/weight-loss.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Eye Surgery",
    href: "/procedures/eye",
    image: "/images/procedures/eye.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Hair Transplant",
    href: "/procedures/hair-transplant",
    image: "/images/procedures/hair.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Dental",
    href: "/procedures/dental",
    image: "/images/procedures/dental.jpg",
    className: "col-span-1 row-span-1",
  },
];

export default function ProcedureCategories() {
  return (
    <section className="bg-white py-20 dark:bg-charcoal" aria-label="Our Procedures">
      <Container>
        <SectionHeading
          title="Our Procedures"
          subtitle="Comprehensive aesthetic and medical procedures tailored to your individual goals."
        />
        <div className="overflow-hidden rounded-2xl grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px]">
          {procedures.map((proc) => (
            <Link
              key={proc.title}
              href={proc.href}
              className={`group relative overflow-hidden ${proc.className}`}
            >
              <Image
                src={proc.image}
                alt={proc.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent transition-all duration-500 group-hover:from-champagne/90 group-hover:via-champagne/30" />
              {/* Title */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold text-white transition-colors duration-500 group-hover:text-charcoal md:text-lg">
                  {proc.title}
                </h3>
                <span className="mt-1 inline-block text-xs font-medium text-charcoal/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
