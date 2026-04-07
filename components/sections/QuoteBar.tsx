"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function QuoteBar() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gold bg-white p-6 shadow-xl dark:border-champagne/10 dark:bg-[#0F0D0C]">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Inputs row */}
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-gold bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 dark:border-champagne/10 dark:bg-charcoal dark:text-champagne dark:placeholder:text-champagne/30 focus:border-gold focus:outline-none md:flex-1"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-gold bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 dark:border-champagne/10 dark:bg-charcoal dark:text-champagne dark:placeholder:text-champagne/30 focus:border-gold focus:outline-none md:flex-1"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-gold bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 dark:border-champagne/10 dark:bg-charcoal dark:text-champagne dark:placeholder:text-champagne/30 focus:border-gold focus:outline-none md:flex-1"
            />
            <select
              className="w-full rounded-lg border border-gold bg-white px-4 py-3 text-sm text-charcoal/60 dark:border-champagne/10 dark:bg-charcoal dark:text-champagne/60 focus:border-gold focus:outline-none md:w-48"
              defaultValue=""
            >
              <option value="" disabled>
                Procedure
              </option>
              <option>Cosmetic Surgery</option>
              <option>Weight Loss</option>
              <option>Rhinoplasty</option>
              <option>Eye Surgery</option>
            </select>
          </div>

          {/* Bottom row: privacy + button */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/10 accent-gold"
              />
              <span className="text-xs leading-relaxed text-charcoal/50 dark:text-champagne/40">
                I agree to the{" "}
                <a href="/privacy-policy" className="text-gold underline hover:text-dark-gold">
                  Privacy Policy
                </a>{" "}
                and consent to being contacted regarding my enquiry.
              </span>
            </label>
            <Button showArrow className="w-full shrink-0 md:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
