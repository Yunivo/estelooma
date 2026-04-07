import Hero from "@/components/sections/Hero";
import QuoteBar from "@/components/sections/QuoteBar";
import ProcedureCategories from "@/components/sections/ProcedureCategories";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Statistics from "@/components/sections/Statistics";
import CtaBanner from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <QuoteBar />
      <ProcedureCategories />
      <BeforeAfterGallery />
      <HowItWorks />
      <Testimonials />
      <Statistics />
      <CtaBanner />
    </>
  );
}
