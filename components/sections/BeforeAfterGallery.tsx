import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const placeholderCases = [
  { label: "Rhinoplasty", slug: "rhinoplasty" },
  { label: "Brazilian Butt Lift", slug: "brazilian-butt-lift" },
  { label: "Tummy Tuck", slug: "tummy-tuck" },
];

export default function BeforeAfterGallery() {
  return (
    <section className="bg-white py-20 dark:bg-charcoal" aria-label="Before and After Gallery">
      <Container>
        <SectionHeading
          title="Before & After"
          subtitle="Real results from our patients. See the transformations that speak for themselves."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {placeholderCases.map((item) => (
            <div key={item.slug} className="overflow-hidden rounded-2xl border border-cream dark:border-champagne/10">
              <div className="grid grid-cols-2">
                <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-charcoal/5 to-charcoal/10">
                  <span className="text-xs font-medium uppercase tracking-wider text-charcoal/30">
                    Before
                  </span>
                </div>
                <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-champagne/20 to-champagne/40">
                  <span className="text-xs font-medium uppercase tracking-wider text-dark-gold/50">
                    After
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-charcoal dark:text-champagne">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="text-sm font-medium text-gold transition-colors hover:text-dark-gold"
          >
            View Full Gallery &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
