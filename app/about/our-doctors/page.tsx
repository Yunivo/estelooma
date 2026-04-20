import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Doctors | Vetted Plastic Surgeons in Istanbul | Estelooma",
  description:
    "Meet the plastic surgeons we partner with. Board-certified, internationally published and personally vetted. Fewer than 3% of Istanbul practitioners qualify.",
};

const doctors = [
  {
    name: "Op. Dr. [Name]",
    specialty: "Rhinoplasty & Facial Aesthetics",
    img: "/images/hero/hero-1.jpg",
    memberships: ["ISAPS", "Turkish Plastic Surgery Association"],
    focus: [
      "Open and piezo rhinoplasty",
      "Revision rhinoplasty",
      "Facial harmonisation",
    ],
    experience: "18 years",
  },
  {
    name: "Op. Dr. [Name]",
    specialty: "Body Contouring & Post-Bariatric",
    img: "/images/hero/hero-2.jpg",
    memberships: ["ISAPS", "EASAPS"],
    focus: [
      "Abdominoplasty",
      "Liposuction & 360 contouring",
      "Brachioplasty and thigh lift",
    ],
    experience: "15 years",
  },
  {
    name: "Op. Dr. [Name]",
    specialty: "Breast Aesthetics",
    img: "/images/hero/hero-3.jpg",
    memberships: ["ISAPS", "IFATS"],
    focus: [
      "Augmentation and mastopexy",
      "Reduction",
      "Reconstruction",
    ],
    experience: "20 years",
  },
];

const vettingCriteria = [
  {
    title: "Board Certification",
    description:
      "Every surgeon in our network holds full board certification from the Turkish Plastic, Reconstructive and Aesthetic Surgery Association or an equivalent international body.",
  },
  {
    title: "International Memberships",
    description:
      "Active membership in at least one recognised international society \u2014 ISAPS, EASAPS, IFATS \u2014 is a minimum requirement, not a distinction.",
  },
  {
    title: "Volume With Specialisation",
    description:
      "We partner with surgeons who operate within a narrow specialty. Breadth dilutes mastery; we select for depth.",
  },
  {
    title: "Independent Outcome Review",
    description:
      "We review real, unedited patient outcomes over a minimum three-year window. Revision rates, complication rates and patient satisfaction scores are audited.",
  },
  {
    title: "Transparent Communication",
    description:
      "Surgeons must be willing to decline cases that are not appropriate. Honesty with patients is a non-negotiable criterion.",
  },
  {
    title: "Ongoing Education",
    description:
      "Published research, conference participation and continued technical development are reviewed annually to maintain partnership status.",
  },
];

export default function OurDoctorsPage() {
  return (
    <>
      {/* ── DOCTORS ── */}
      <section className="bg-white pb-20 pt-16 dark:bg-charcoal lg:pt-20">
        <Container>
          <SectionHeading
            title="Meet Our Surgeons"
            subtitle="A small circle of specialists, each operating within their narrow field of mastery."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((d) => (
              <article
                key={d.name + d.specialty}
                className="overflow-hidden rounded-2xl border border-cream bg-white dark:border-champagne/10 dark:bg-[#1A1817]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne/80">
                      {d.experience} of practice
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal dark:text-champagne">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-sm text-gold">{d.specialty}</p>

                  <div className="mt-5 border-t border-cream pt-4 dark:border-champagne/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 dark:text-champagne/40">
                      Focus Areas
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {d.focus.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-charcoal/70 dark:text-champagne/60"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {d.memberships.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-gold/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-dark-gold dark:text-gold"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VETTING PROCESS ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="How We Vet"
            subtitle="Our partnership criteria are not checkboxes. They are lived standards, reviewed annually."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vettingCriteria.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#1A1817]"
              >
                <span className="text-4xl font-extralight leading-none text-champagne dark:text-champagne/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-charcoal dark:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-gradient-start to-gradient-end py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-light tracking-tight text-champagne md:text-3xl lg:text-4xl">
            Want to know which surgeon fits your case?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-champagne/70">
            Share your goals with a coordinator and we will match you with the
            surgeon whose specialty aligns with your anatomy.
          </p>
          <div className="mt-8">
            <Button href="/get-a-quote">Request a Match</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
