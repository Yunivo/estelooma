import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { usps } from "@/lib/constants";

const uspIcons: React.ReactNode[] = [
  // Expert Surgeons
  <svg key="surgeons" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="20" cy="12" r="6" />
    <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" />
    <path d="M26 12l4 4m-4 0l4-4" />
  </svg>,
  // JCI-Accredited
  <svg key="jci" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" />
  </svg>,
  // VIP Transfers
  <svg key="vip" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="14" width="32" height="14" rx="3" />
    <circle cx="12" cy="30" r="3" />
    <circle cx="28" cy="30" r="3" />
    <path d="M4 18h32" />
  </svg>,
  // Premium Accommodation
  <svg key="hotel" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="8" width="28" height="26" rx="2" />
    <path d="M6 16h28M16 8v26M24 8v26" />
  </svg>,
  // Dedicated Aftercare
  <svg key="aftercare" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 36s-14-8.35-14-18a8 8 0 0 1 14-5.28A8 8 0 0 1 34 18c0 9.65-14 18-14 18z" />
  </svg>,
];

export default function WhyEstelooma() {
  return (
    <section className="py-20" aria-label="Why ESTELOOMA">
      <Container>
        <SectionHeading
          title="Why ESTELOOMA?"
          subtitle="Every detail of your journey is curated for comfort, safety, and exceptional results."
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {usps.map((usp, i) => (
            <div key={usp.title} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne/30 text-dark-gold">
                {uspIcons[i]}
              </div>
              <h3 className="mt-4 text-base font-semibold text-charcoal">
                {usp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
