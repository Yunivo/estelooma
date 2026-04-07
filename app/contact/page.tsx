import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ESTELOOMA",
  description:
    "Get in touch with ESTELOOMA for your cosmetic procedure consultation in Istanbul. Reach us by email, WhatsApp, or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden border-y border-charcoal/[0.08] dark:border-champagne/[0.08]">
      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-0 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {/* Left — Contact Details */}
        <div className="relative order-2 p-8 pb-16 lg:order-1 lg:col-span-2 lg:border-r lg:border-charcoal/[0.08] lg:py-16 lg:pl-0 lg:pr-12 dark:lg:border-champagne/[0.08]">
          {/* Full-bleed background — extends to left viewport edge */}
          <div className="absolute inset-y-0 -left-[100vw] right-0 bg-champagne/40 dark:bg-[#141210] max-lg:left-[calc(-1*(theme(spacing.4)))] max-lg:right-[calc(-1*(theme(spacing.4)))] max-sm:left-[calc(-1*(theme(spacing.4)))] sm:max-lg:left-[calc(-1*(theme(spacing.6)))] sm:max-lg:right-[calc(-1*(theme(spacing.6)))]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold dark:text-gold">
              Get in Touch
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl">
              We&apos;re Here
              <br />
              to Help
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/50 dark:text-champagne/40">
              Have questions about our procedures? Our multilingual team is
              available to guide you through every detail.
            </p>

            {/* Divider */}
            <div className="my-8 h-px bg-charcoal/[0.08] dark:bg-champagne/[0.08]" />

            {/* Contact items */}
            <div className="flex flex-col gap-7">
              <a
                href="mailto:info@estelooma.com"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-gold/30 text-dark-gold transition-colors group-hover:border-dark-gold group-hover:bg-dark-gold/10 dark:border-gold/30 dark:text-gold dark:group-hover:border-gold dark:group-hover:bg-gold/10">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
                    Email
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-charcoal transition-colors group-hover:text-dark-gold dark:text-champagne dark:group-hover:text-gold">
                    info@estelooma.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-gold/30 text-dark-gold transition-colors group-hover:border-dark-gold group-hover:bg-dark-gold/10 dark:border-gold/30 dark:text-gold dark:group-hover:border-gold dark:group-hover:bg-gold/10">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
                    WhatsApp
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-charcoal transition-colors group-hover:text-dark-gold dark:text-champagne dark:group-hover:text-gold">
                    +90 555 123 4567
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Istanbul+Turkey"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-gold/30 text-dark-gold transition-colors group-hover:border-dark-gold group-hover:bg-dark-gold/10 dark:border-gold/30 dark:text-gold dark:group-hover:border-gold dark:group-hover:bg-gold/10">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
                    Location
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-charcoal transition-colors group-hover:text-dark-gold dark:text-champagne dark:group-hover:text-gold">
                    Istanbul, Turkey
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark-gold/30 text-dark-gold dark:border-gold/30 dark:text-gold">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
                    Working Hours
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-charcoal dark:text-champagne">
                    Mon – Sat, 09:00 – 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-charcoal/[0.08] dark:bg-champagne/[0.08]" />

            {/* Trust badges */}
            <div className="flex flex-col gap-4">
              {[
                "Free & confidential consultation",
                "Response within 24 hours",
                "Multilingual patient coordinators",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark-gold/10 dark:bg-gold/10">
                    <svg
                      className="h-3 w-3 text-dark-gold dark:text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-charcoal/60 dark:text-champagne/45">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="order-1 p-8 pb-10 lg:order-2 lg:col-span-3 lg:py-16 lg:pl-12 lg:pr-0">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Send a Message
          </p>
          <h2 className="mt-3 text-2xl font-light tracking-tight text-charcoal dark:text-champagne">
            Tell Us About Your Goals
          </h2>
          <p className="mt-2 text-sm text-charcoal/50 dark:text-champagne/40">
            Fill in the details below and we&apos;ll get back to you with a
            personalised treatment plan.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
