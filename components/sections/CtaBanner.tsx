import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CtaBanner() {
  return (
    <section
      className="bg-gradient-to-r from-gradient-start to-gradient-end py-20"
      aria-label="Get a Free Quote"
    >
      <Container className="text-center">
        <h2 className="text-2xl font-light tracking-tight text-champagne md:text-3xl lg:text-4xl">
          Ready to Start Your Transformation?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-champagne/70">
          Get a personalized treatment plan from our expert medical team.
          Consultation is free and comes with no obligations.
        </p>
        <div className="mt-8">
          <Button href="/get-a-quote">Get a Free Quote</Button>
        </div>
      </Container>
    </section>
  );
}
