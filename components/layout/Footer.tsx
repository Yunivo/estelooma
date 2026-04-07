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
              className="h-7 w-auto dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-dark-bg.svg"
              alt="ESTELOOMA"
              className="hidden h-7 w-auto dark:block"
            />
            <p className="mt-4 text-sm leading-relaxed text-charcoal/50 dark:text-champagne/60">
              Where Beauty is Curated
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/40 dark:text-champagne/50">
              Premium health tourism and aesthetic procedures in Istanbul,
              Turkey.
            </p>
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
