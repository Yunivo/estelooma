import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Hospitals | JCI-Aligned Facilities in Istanbul | Estelooma",
  description:
    "Every Estelooma procedure takes place at a JCI-aligned hospital in Istanbul, equipped with current surgical technology and international safety standards.",
};

const hospitals = [
  {
    name: "Partner Hospital \u2014 European Side",
    district: "\u015ei\u015fli, Istanbul",
    img: "/images/hero/hero-2.jpg",
    bedCount: "220 beds",
    operatingRooms: "12 operating theatres",
    specialties: ["Plastic Surgery", "Anaesthesiology", "Intensive Care"],
    accreditations: ["JCI-aligned", "ISO 9001", "Ministry of Health"],
  },
  {
    name: "Partner Hospital \u2014 Bosphorus Campus",
    district: "Be\u015fikta\u015f, Istanbul",
    img: "/images/hero/hero-3.jpg",
    bedCount: "180 beds",
    operatingRooms: "9 operating theatres",
    specialties: ["Aesthetic Surgery", "Recovery Suites", "24/7 ICU"],
    accreditations: ["JCI-aligned", "ISO 9001"],
  },
  {
    name: "Partner Hospital \u2014 Asian Side",
    district: "Kad\u0131k\u00f6y, Istanbul",
    img: "/images/hero/hero-1.jpg",
    bedCount: "260 beds",
    operatingRooms: "14 operating theatres",
    specialties: ["Plastic Surgery", "Bariatrics", "Cardiology Support"],
    accreditations: ["JCI-aligned", "ISO 9001", "TEMOS"],
  },
];

const standards = [
  {
    title: "Accredited Anaesthesia Teams",
    description:
      "Board-certified anaesthesiologists with dedicated plastic surgery experience, supported by 24/7 ICU availability.",
  },
  {
    title: "Sterile Operating Environments",
    description:
      "HEPA-filtered laminar airflow operating theatres with strict sterilisation protocols aligned to international standards.",
  },
  {
    title: "Pre-Operative Screening",
    description:
      "Comprehensive bloodwork, ECG and anaesthesia assessment performed on arrival, reviewed by your surgeon before any procedure.",
  },
  {
    title: "Private Recovery Suites",
    description:
      "Single-occupancy recovery rooms with round-the-clock nursing care. No shared wards. No compromise on rest.",
  },
  {
    title: "Multi-Lingual Staff",
    description:
      "Clinical teams supported by interpreters fluent in English, Arabic, German, French and Russian during your stay.",
  },
  {
    title: "Emergency Protocols",
    description:
      "On-site emergency response infrastructure and direct transfer agreements with affiliated tertiary care centres.",
  },
];

export default function OurHospitalsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-[#FBF7F1] via-white to-white pt-20 dark:bg-none dark:bg-[#0A0908]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[38rem] w-[38rem] rounded-full opacity-70 blur-3xl dark:opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(198,160,91,0.28), rgba(198,160,91,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full opacity-60 blur-3xl dark:opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(233,214,178,0.45), rgba(233,214,178,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-charcoal"
        />

        <Container className="relative z-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 pt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/50 dark:text-champagne/40"
          >
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="text-charcoal/25 dark:text-champagne/20">/</span>
            <Link href="/about" className="transition-colors hover:text-gold">
              About
            </Link>
            <span className="text-charcoal/25 dark:text-champagne/20">/</span>
            <span className="text-gold">Our Hospitals</span>
          </nav>

          <div className="py-14 lg:py-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dark-gold dark:text-gold">
              Clinical Infrastructure
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight text-charcoal dark:text-champagne md:text-6xl lg:text-7xl">
              Facilities selected
              <span className="mt-1 block font-extralight italic text-gold">
                like we would choose our own.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/65 dark:text-champagne/55 md:text-lg">
              Every Estelooma procedure is performed at a JCI-aligned hospital
              in Istanbul, equipped with current surgical technology,
              accredited anaesthesia teams and private recovery suites.
            </p>
          </div>
        </Container>
      </section>

      {/* ── HOSPITALS ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Partner Hospitals"
            subtitle="A tight network, selected not for scale but for clinical rigour and patient experience."
          />
          <div className="space-y-10">
            {hospitals.map((h, i) => (
              <article
                key={h.name}
                className={`grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-cream bg-white dark:border-champagne/10 dark:bg-[#1A1817] lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                    {h.district}
                  </p>
                  <h3 className="mt-3 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl">
                    {h.name}
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-cream py-5 dark:border-champagne/10">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 dark:text-champagne/40">
                        Capacity
                      </p>
                      <p className="mt-1 text-sm font-semibold text-charcoal dark:text-champagne">
                        {h.bedCount}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 dark:text-champagne/40">
                        Theatres
                      </p>
                      <p className="mt-1 text-sm font-semibold text-charcoal dark:text-champagne">
                        {h.operatingRooms}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 dark:text-champagne/40">
                      Specialties
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {h.specialties.map((s) => (
                        <li
                          key={s}
                          className="rounded-full bg-cream px-3 py-1 text-xs text-charcoal/70 dark:bg-champagne/10 dark:text-champagne/65"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/50 dark:text-champagne/40">
                      Accreditations
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {h.accreditations.map((a) => (
                        <li
                          key={a}
                          className="rounded-full border border-gold/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-dark-gold dark:text-gold"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── STANDARDS ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Clinical Standards"
            subtitle="What every partner facility guarantees, independent of which one your procedure takes place in."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standards.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#1A1817]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-charcoal dark:text-champagne">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/55">
                  {s.description}
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
            Your procedure, in a facility you can trust.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-champagne/70">
            Tell us what you are considering and we will share the full
            clinical picture &mdash; facility, surgeon and care plan &mdash; in writing.
          </p>
          <div className="mt-8">
            <Button href="/get-a-quote">Request Your Plan</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
