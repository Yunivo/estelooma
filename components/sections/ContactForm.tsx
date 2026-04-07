"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputBase =
  "w-full rounded-xl border border-charcoal/[0.08] bg-cream/50 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-gold focus:bg-white focus:outline-none dark:border-champagne/[0.08] dark:bg-champagne/[0.03] dark:text-champagne dark:placeholder:text-champagne/25 dark:focus:border-gold/60 dark:focus:bg-transparent";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Jane Doe"
            className={inputBase}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
            Email Address
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            className={inputBase}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            className={inputBase}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
            Interested Procedure
          </label>
          <select className={inputBase} defaultValue="">
            <option value="" disabled>
              Select a procedure
            </option>
            <option>Cosmetic Surgery</option>
            <option>Weight Loss</option>
            <option>Rhinoplasty</option>
            <option>Eye Surgery</option>
            <option>Hair Transplant</option>
            <option>Dental</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-charcoal/40 dark:text-champagne/35">
          Your Message
        </label>
        <textarea
          placeholder="Tell us about the results you'd like to achieve..."
          rows={5}
          className={`${inputBase} resize-none`}
        />
      </div>

      <div className="flex flex-col items-start gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/10 accent-gold"
          />
          <span className="text-xs leading-relaxed text-charcoal/45 dark:text-champagne/35">
            I agree to the{" "}
            <a
              href="/privacy-policy"
              className="text-gold underline decoration-gold/30 underline-offset-2 hover:decoration-gold"
            >
              Privacy Policy
            </a>{" "}
            and consent to being contacted regarding my enquiry.
          </span>
        </label>
        <Button showArrow className="w-full shrink-0 sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
