import Link from "next/link";
import Container from "@/components/ui/Container";
import { procedureCategories } from "@/lib/procedures";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-white text-charcoal dark:border-champagne/5 dark:bg-charcoal dark:text-champagne">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + tagline */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-light-bg.svg"
              alt="ESTELOOMA"
              className="h-4 w-auto dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-dark-bg.svg"
              alt="ESTELOOMA"
              className="hidden h-4 w-auto dark:block"
            />
            <p className="mt-4 text-sm leading-relaxed text-charcoal/50 dark:text-champagne/60">
              Where Beauty is Curated
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/40 dark:text-champagne/50">
              Premium health tourism and aesthetic procedures in Istanbul,
              Turkey.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/estelooma",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  href: "https://www.tiktok.com/@estelooma",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M19.3 7.5a5.8 5.8 0 01-3.4-1.1 5.8 5.8 0 01-2.2-3.4h-3v12.3a2.6 2.6 0 11-1.8-2.5V9.7a5.6 5.6 0 104.8 5.6V9.8a8.8 8.8 0 005.6 1.9V8.6a5.7 5.7 0 01-0.04-1.1z" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/estelooma",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.2-1.5 1.5-1.5h1.6V4.4a21 21 0 00-2.3-.1c-2.3 0-3.8 1.4-3.8 4v2.2H8v3h2.5V21z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/estelooma",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.27 2.36 4.27 5.43zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/10 text-charcoal/60 transition-all hover:border-gold/50 hover:bg-gold/5 hover:text-gold dark:border-champagne/15 dark:text-champagne/60 dark:hover:border-gold/50 dark:hover:text-gold"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["About", "Before & Afters", "Our Patients", "Blog", "Contact", "Get a Free Quote"].map(
                (label) => (
                  <li key={label}>
                    <Link
                      href={`/${label.toLowerCase().replace(/ /g, "-")}`}
                      className="text-sm text-charcoal/50 transition-colors hover:text-charcoal dark:text-champagne/60 dark:hover:text-champagne"
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Procedures */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              Procedures
            </h3>
            <ul className="space-y-2">
              {procedureCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/procedures/${cat.slug}`}
                    className="text-sm text-charcoal/50 transition-colors hover:text-charcoal dark:text-champagne/60 dark:hover:text-champagne"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-charcoal/50 dark:text-champagne/60">
              <li>Istanbul, Turkey</li>
              <li>
                <a
                  href="mailto:info@estelooma.com"
                  className="transition-colors hover:text-charcoal dark:hover:text-champagne"
                >
                  info@estelooma.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/905551234567"
                  className="transition-colors hover:text-charcoal dark:hover:text-champagne"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal/5 py-6 text-center text-xs text-charcoal/30 dark:border-champagne/10 dark:text-champagne/40">
          &copy; {new Date().getFullYear()} ESTELOOMA. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
