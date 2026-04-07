import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { steps } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section className="py-20" aria-label="How It Works">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle="Your journey from consultation to transformation, curated at every step."
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="block text-8xl font-extralight leading-none text-champagne lg:text-9xl">
                {String(step.number).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-charcoal dark:text-champagne">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
