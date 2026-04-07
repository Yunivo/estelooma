import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          className="text-gold"
        >
          <path d="M8 1l2.1 4.2 4.7.7-3.4 3.3.8 4.6L8 11.5l-4.2 2.3.8-4.6L1.2 5.9l4.7-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20 dark:bg-charcoal" aria-label="Patient Testimonials">
      <Container>
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Hear from patients who trusted us with their transformation journey."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70 dark:text-champagne/60">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-cream pt-4 dark:border-champagne/10">
                <p className="text-sm font-semibold text-charcoal dark:text-champagne">{t.name}</p>
                <p className="text-xs text-charcoal/50 dark:text-champagne/40">
                  {t.country} &middot; {t.procedure}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
