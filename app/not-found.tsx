import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-[family-name:var(--font-geist-mono)] text-[10rem] font-extralight leading-none tracking-tight text-champagne md:text-[14rem]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-charcoal/50 dark:text-champagne/40">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find your way.
        </p>
        <div className="mt-8">
          <Button href="/" showArrow>
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
