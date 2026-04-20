import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Estelooma | Premium Medical Concierge in Istanbul",
  description:
    "Estelooma is a premium medical concierge brand connecting international patients with Istanbul\u2019s most rigorously vetted plastic surgeons and JCI-aligned hospitals.",
};

const values = [
  {
    title: "Curation Over Convenience",
    description:
      "We do not sell surgery. We match patients with surgeons we would send our own family to. Fewer than 3% of Istanbul practitioners meet our partnership criteria.",
  },
  {
    title: "Transparency, End to End",
    description:
      "Your full treatment plan, total investment and realistic expectations are confirmed in writing before you commit to anything. No surprises. No upsells on the day.",
  },
  {
    title: "One Dedicated Human",
    description:
      "From your first message to your last follow-up, one coordinator owns your case. No call centres. No ticket numbers. One person, who knows you.",
  },
  {
    title: "Medical Safety First",
    description:
      "Every procedure is performed at JCI-aligned hospitals with accredited anaesthesiology teams and rigorous pre-operative screening protocols.",
  },
];

const principles = [
  "Board-certified surgeons only, personally vetted",
  "JCI-aligned hospitals with international safety standards",
  "Realistic results \u2014 no retouched before/after imagery",
  "Written quotes with full price transparency",
  "One dedicated coordinator throughout your journey",
  "Post-operative follow-up for 12 months after surgery",
];

const figures = [
  { value: "2,400+", label: "International Patients" },
  { value: "12", label: "Partner Surgeons" },
  { value: "8", label: "Partner Hospitals" },
  { value: "40+", label: "Countries Served" },
];

export default function AboutPage() {
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
            <span className="text-gold">About Us</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dark-gold dark:text-gold">
                About Estelooma
              </span>
              <h1 className="mt-4 text-4xl font-light leading-[1.05] tracking-tight text-charcoal dark:text-champagne md:text-6xl lg:text-7xl">
                Where care
                <span className="mt-1 block font-extralight italic text-gold">
                  meets precision
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 dark:text-champagne/55 md:text-lg">
                Estelooma is a premium medical concierge brand based in
                Istanbul, pairing international patients with the city&rsquo;s
                most rigorously vetted plastic surgeons and JCI-aligned
                hospitals. One human to guide you. One written price. One
                uncompromising standard.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="/get-a-quote" showArrow>
                  Speak with a Coordinator
                </Button>
                <Link
                  href="/about/our-doctors"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-gold dark:text-champagne dark:hover:text-gold"
                >
                  Meet our doctors
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-charcoal/5 dark:ring-champagne/10">
                <Image
                  src="/images/hero/hero-2.jpg"
                  alt="Estelooma clinic interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── STORY ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl lg:text-4xl">
              Founded on a single question: who would we trust with our own
              face?
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/65 dark:text-champagne/55">
              <p>
                Istanbul produces some of the world&rsquo;s finest plastic
                surgeons, but the landscape is noisy. Volume-driven clinics,
                fragmented aftercare and opaque pricing have left international
                patients to navigate an overwhelming market largely on their
                own.
              </p>
              <p>
                Estelooma was founded to answer one question. Who would we
                trust with our own face, our own body, our own recovery? Every
                surgeon, facility and process in our network exists because the
                answer is yes.
              </p>
              <p>
                We are not a booking platform. We are a small, hand-picked
                team of coordinators, medical advisors and logistics
                specialists who treat each patient as the exception, not the
                volume.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FIGURES ── */}
      <section className="bg-cream py-14 dark:bg-[#0F0D0C]">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {figures.map((f) => (
              <div key={f.label} className="text-center">
                <p className="text-3xl font-light tracking-tight text-gold md:text-4xl lg:text-5xl">
                  {f.value}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/60 dark:text-champagne/50">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="What We Stand For"
            subtitle="Four principles that shape every decision, from surgeon selection to the last follow-up message."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="relative rounded-2xl border border-cream bg-white p-8 dark:border-champagne/10 dark:bg-[#1A1817]"
              >
                <span className="text-5xl font-extralight leading-none text-champagne dark:text-champagne/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-charcoal dark:text-champagne">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/55">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PRINCIPLES ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                Our Commitments
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl lg:text-4xl">
                A standard we will not compromise on.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/55">
                These are not marketing claims. They are the criteria that
                determine whether a surgeon, hospital or partner remains in
                the Estelooma network.
              </p>
            </div>
            <ul className="space-y-4">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-4 border-b border-charcoal/10 pb-4 last:border-0 dark:border-champagne/10"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <svg
                      className="h-3 w-3 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-charcoal/75 dark:text-champagne/70">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── EXPLORE ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Our Doctors",
                href: "/about/our-doctors",
                description:
                  "The surgeons we partner with, their credentials and the vetting process behind them.",
              },
              {
                title: "Our Hospitals",
                href: "/about/our-hospitals",
                description:
                  "Inside the JCI-aligned facilities where every Estelooma procedure takes place.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative overflow-hidden rounded-2xl border border-cream bg-white p-8 transition-all hover:border-gold/30 hover:shadow-md dark:border-champagne/10 dark:bg-[#1A1817] dark:hover:border-gold/30"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Continue Reading
                </p>
                <h3 className="mt-4 text-2xl font-light tracking-tight text-charcoal dark:text-champagne">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/55">
                  {card.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  Explore
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-gradient-start to-gradient-end py-20">
        <Container className="text-center">
          <h2 className="text-2xl font-light tracking-tight text-champagne md:text-3xl lg:text-4xl">
            Ready to begin a conversation?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-champagne/70">
            Every Estelooma journey starts with a single, unhurried
            consultation. No obligation. No sales script.
          </p>
          <div className="mt-8">
            <Button href="/get-a-quote">Get a Free Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
