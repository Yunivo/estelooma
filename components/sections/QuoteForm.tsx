"use client";

import { useState, useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import { procedureCategories } from "@/lib/procedures";

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

const allProcedures = procedureCategories.flatMap((cat) =>
  cat.subCategories.flatMap((sc) =>
    sc.procedures.map((p) => ({ ...p, category: cat.name }))
  )
);

export default function QuoteForm() {
  const [agreed, setAgreed] = useState(false);
  const [procedureQuery, setProcedureQuery] = useState("");
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = procedureQuery
    ? allProcedures.filter(
        (p) =>
          p.name.toLowerCase().includes(procedureQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(procedureQuery.toLowerCase())
      )
    : allProcedures;

  const inputCls =
    "w-full rounded-xl border border-charcoal/10 bg-cream/40 px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors focus:border-gold focus:bg-white focus:outline-none";

  const labelCls =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-charcoal/45";

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Personal Information */}
      <div>
        <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-charcoal">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
            1
          </span>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Full Name</label>
            <input type="text" placeholder="John Doe" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className={inputCls}
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
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal/5" />

      {/* Procedure Selection */}
      <div>
        <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-charcoal">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
            2
          </span>
          Procedure Details
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative" ref={dropdownRef}>
            <label className={labelCls}>Procedure</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search procedures..."
                value={procedureQuery}
                onChange={(e) => {
                  setProcedureQuery(e.target.value);
                  setSelectedProcedure("");
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className={inputCls}
              />
              <svg
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>

            {/* Selected badge */}
            {selectedProcedure && (
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1">
                <span className="text-xs font-medium text-gold">
                  {
                    allProcedures.find((p) => p.slug === selectedProcedure)
                      ?.name
                  }
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProcedure("");
                    setProcedureQuery("");
                  }}
                  className="text-gold/60 transition-colors hover:text-gold"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}

            {/* Dropdown */}
            {showDropdown && !selectedProcedure && (
              <div className="absolute left-0 right-0 top-full z-30 mt-1 max-h-56 overflow-y-auto rounded-xl border border-charcoal/10 bg-white shadow-lg">
                {filtered.length > 0 ? (
                  (() => {
                    let lastCategory = "";
                    return filtered.map((p) => {
                      const showHeader = p.category !== lastCategory;
                      lastCategory = p.category;
                      return (
                        <div key={p.slug}>
                          {showHeader && (
                            <div className="sticky top-0 bg-cream/90 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-charcoal/40 backdrop-blur-sm">
                              {p.category}
                            </div>
                          )}
                          <button
                            type="button"
                            className="w-full px-4 py-2.5 text-left text-sm text-charcoal transition-colors hover:bg-gold/5 hover:text-gold"
                            onClick={() => {
                              setSelectedProcedure(p.slug);
                              setProcedureQuery(p.name);
                              setShowDropdown(false);
                            }}
                          >
                            {p.name}
                          </button>
                        </div>
                      );
                    });
                  })()
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-charcoal/35">
                    No procedures found
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            <label className={labelCls}>Preferred Date</label>
            <input type="date" className={inputCls} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal/5" />

      {/* Additional Details */}
      <div>
        <h3 className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-charcoal">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
            3
          </span>
          Additional Details
        </h3>
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelCls}>
              Tell us about your goals &amp; medical history
            </label>
            <textarea
              rows={4}
              placeholder="Describe what you'd like to achieve, any previous procedures, medical conditions, or questions you have..."
              className={`${inputCls} resize-none`}
            />
          </div>
          <div>
            <label className={labelCls}>Upload Photos (optional)</label>
            <div className="flex items-center justify-center rounded-xl border border-dashed border-charcoal/10 bg-cream/30 px-6 py-8 transition-colors hover:border-gold">
              <div className="text-center">
                <svg
                  className="mx-auto h-8 w-8 text-charcoal/15"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
                <p className="mt-2 text-xs text-charcoal/35">
                  Drag &amp; drop or{" "}
                  <span className="cursor-pointer font-medium text-gold hover:text-dark-gold">
                    browse files
                  </span>
                </p>
                <p className="mt-1 text-[11px] text-charcoal/25">
                  JPG, PNG up to 10 MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal/5" />

      {/* Submit */}
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-charcoal/10 accent-gold"
          />
          <span className="text-xs leading-relaxed text-charcoal/45">
            I agree to the{" "}
            <a
              href="/privacy-policy"
              className="text-gold underline hover:text-dark-gold"
            >
              Privacy Policy
            </a>{" "}
            and consent to being contacted regarding my enquiry.
          </span>
        </label>
        <Button showArrow className="w-full shrink-0 sm:w-auto">
          Get My Free Quote
        </Button>
      </div>
    </form>
  );
}
