import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import QuoteForm from "@/components/sections/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | ESTELOOMA",
  description:
    "Request a free, no-obligation consultation for your cosmetic procedure in Istanbul. Receive a personalised treatment plan within 24 hours.",
};

const trustPoints = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "100% Free",
    desc: "No hidden fees, no obligations",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "24h Response",
    desc: "Personalised quote within a day",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Private & Secure",
    desc: "Your data is encrypted end-to-end",
  },
];

const steps = [
  {
    num: "01",
    title: "We Review",
    desc: "Our coordinators match you with the best specialist.",
  },
  {
    num: "02",
    title: "Your Quote",
    desc: "Detailed treatment plan with transparent pricing.",
  },
  {
    num: "03",
    title: "Video Call",
    desc: "Free consultation with your surgeon to confirm.",
  },
];

export default function GetAQuotePage() {
  return (
    <>
      {/* ── Hero: split layout ── */}
      <section className="relative bg-white dark:bg-[#0A0908]">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(196,168,124,0.08),transparent)]" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center gap-12 pb-16 pt-6 lg:flex-row lg:items-start lg:gap-16 lg:pb-24 lg:pt-8">
            {/* Left: copy */}
            <div className="w-full shrink-0 text-center lg:w-[38%] lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Start Your Journey
              </p>
              <h1 className="mt-4 text-4xl font-light leading-[1.15] tracking-tight text-charcoal dark:text-champagne md:text-5xl xl:text-6xl">
                Get Your
                <br />
                <span className="text-gold">Free</span> Quote
              </h1>
              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-charcoal/50 dark:text-champagne/50 md:text-lg lg:mx-0">
                Tell us about your goals and our medical team will prepare a
                personalised treatment plan with transparent pricing.
              </p>

              {/* Trust points */}
              <div className="mt-10 flex flex-col gap-5">
                {trustPoints.map((t) => (
                  <div
                    key={t.title}
                    className="flex items-start gap-3 text-left"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      {t.icon}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-charcoal dark:text-champagne">
                        {t.title}
                      </p>
                      <p className="text-xs text-charcoal/40 dark:text-champagne/40">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini steps — desktop only */}
              <div className="mt-14 hidden lg:block">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/25 dark:text-champagne/25">
                  What happens next
                </p>
                <div className="flex gap-6">
                  {steps.map((s, i) => (
                    <div key={s.num} className="flex items-start gap-3">
                      <span className="text-2xl font-extralight leading-none text-gold/25">
                        {s.num}
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-charcoal/70 dark:text-champagne/70">
                          {s.title}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-charcoal/30 dark:text-champagne/30">
                          {s.desc}
                        </p>
                      </div>
                      {i < steps.length - 1 && (
                        <div className="ml-3 mt-1.5 h-px w-6 bg-charcoal/10 dark:bg-champagne/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="w-full lg:flex-1">
              <div className="rounded-2xl border border-charcoal/5 bg-white p-6 shadow-xl dark:border-champagne/8 dark:bg-[#0F0D0C] sm:p-9">
                <QuoteForm />
              </div>
              <p className="mt-4 text-center text-[11px] text-charcoal/25 dark:text-champagne/20">
                Your information is encrypted and never shared with third
                parties.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Steps — mobile only ── */}
      <section className="bg-cream py-16 dark:bg-charcoal lg:hidden">
        <Container>
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/30 dark:text-champagne/25">
            What happens next
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-charcoal/5 bg-white p-6 dark:border-champagne/5 dark:bg-[#0F0D0C]"
              >
                <span className="text-2xl font-extralight text-gold/30">
                  {s.num}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-charcoal dark:text-champagne">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs text-charcoal/50 dark:text-champagne/40">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
