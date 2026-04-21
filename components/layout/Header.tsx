import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeaderClient from "./HeaderClient";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";
import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { navItems } from "@/lib/constants";

export default function Header() {
  return (
    <HeaderClient>
      <Container>
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-light-bg.svg"
              alt="ESTELOOMA"
              className="h-5 w-auto dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-dark-bg.svg"
              alt="ESTELOOMA"
              className="hidden h-5 w-auto dark:block"
            />
          </Link>

          {/* Center: Navigation (desktop) */}
          <nav className="hidden items-center gap-8 lg:flex">
            <MegaMenu />
            {navItems
              .filter((item) => !item.hasMegaMenu)
              .map((item) =>
                item.subItems && item.subItems.length > 0 ? (
                  <DropdownMenu
                    key={item.href}
                    label={item.label}
                    items={item.subItems}
                  />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-charcoal/80 transition-colors hover:text-gold dark:text-champagne/70 dark:hover:text-champagne"
                  >
                    {item.label}
                  </Link>
                )
              )}
          </nav>

          {/* Right: Theme toggle + CTA + Mobile nav toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <div className="hidden sm:block lg:block">
              <Button
                href="/get-a-quote"
                showArrow
              >
                Get a Free Quote
              </Button>
            </div>
            <MobileNav />
          </div>
        </div>
      </Container>
    </HeaderClient>
  );
}
