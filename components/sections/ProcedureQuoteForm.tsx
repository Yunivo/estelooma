"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const countries = [
  "United Kingdom",
  "Germany",
  "France",
  "Netherlands",
  "United States",
  "Canada",
  "Australia",
  "Sweden",
  "Denmark",
  "Norway",
  "Ireland",
  "Belgium",
  "Switzerland",
  "Austria",
  "Italy",
  "Spain",
  "Other",
];

type Props = {
  procedureName: string;
};

export default function ProcedureQuoteForm({ procedureName }: Props) {
  const [agreed, setAgreed] = useState(false);

  const inputCls =
    "w-full rounded-xl border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-gold focus:bg-white focus:outline-none dark:border-champagne/10 dark:bg-champagne/5 dark:text-champagne dark:placeholder:text-champagne/35 dark:focus:bg-[#0F0D0C]";

  const labelCls =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-charcoal/45 dark:text-champagne/45";

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <input type="hidden" name="procedure" value={procedureName} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Full Name</label>
          <input type="text" placeholder="John Doe" className={inputCls} required />
        </div>
        <div>
          <label className={labelCls}>Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            className={inputCls}
            required
          />
        </div>
        <div>
          <label className={labelCls}>Phone / WhatsApp</label>
          <input
            type="tel"
            placeholder="+44 7700 900000"
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Country</label>
          <select className={inputCls} defaultValue="">
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Your Message (optional)</label>
        <textarea
          rows={3}
          placeholder={`Tell us about your goals for ${procedureName.toLowerCase()}, any previous procedures or questions you have...`}
          className={`${inputCls} resize-none`}
        />
      </div>

      <div className="flex flex-col items-start gap-4 border-t border-charcoal/5 pt-5 dark:border-champagne/5 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/10 accent-gold"
          />
          <span className="text-xs leading-relaxed text-charcoal/45 dark:text-champagne/45">
            I agree to the{" "}
            <a
              href="/privacy-policy"
              className="text-gold underline hover:text-dark-gold"
            >
              Privacy Policy
            </a>{" "}
            and consent to being contacted.
          </span>
        </label>
        <Button showArrow className="w-full shrink-0 sm:w-auto">
          Request a Free Quote
        </Button>
      </div>
    </form>
  );
}
