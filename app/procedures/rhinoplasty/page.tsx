import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import RhinoplastyFAQ from "./RhinoplastyFAQ";
import { faqItems } from "./faqData";
import StickyNav from "./StickyNav";
import ProcedureQuoteForm from "@/components/sections/ProcedureQuoteForm";

export const metadata: Metadata = {
  title: "Rhinoplasty in Istanbul | Expert Surgeons & Recovery",
  description:
    "Expert rhinoplasty in Istanbul with ISAPS-certified surgeons, JCI-aligned hospitals and an all-inclusive 7-day concierge package by Estelooma.",
  alternates: {
    canonical: "/procedures/rhinoplasty",
  },
  openGraph: {
    type: "article",
    url: "/procedures/rhinoplasty",
    title: "Rhinoplasty in Istanbul | Expert Surgeons & Recovery",
    description:
      "Expert rhinoplasty in Istanbul with ISAPS-certified surgeons, JCI-aligned hospitals and an all-inclusive 7-day concierge package.",
    images: [
      {
        url: "/images/procedures/rhinoplasty-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rhinoplasty in Istanbul \u2014 Estelooma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhinoplasty in Istanbul | Expert Surgeons & Recovery",
    description:
      "Expert rhinoplasty in Istanbul with ISAPS-certified surgeons, JCI-aligned hospitals and an all-inclusive 7-day concierge package.",
    images: ["/images/procedures/rhinoplasty-hero.jpg"],
  },
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

const whyEstelooma = [
  {
    title: "Surgeon Curation",
    description:
      "Every rhinoplasty at Estelooma is performed by a surgeon we have personally vetted. Selected not for availability, but for results. Fewer than 3% of Istanbul practitioners meet our partnership criteria.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5" />
      </svg>
    ),
  },
  {
    title: "Transparent Safety Standards",
    description:
      "Our partner facilities operate under international safety and hygiene standards. Every procedure is conducted at JCI-aligned hospitals with state-of-the-art surgical infrastructure.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Personalised Concierge Care",
    description:
      "From your first message to your last follow-up, you have one dedicated coordinator managing every detail. No call centres. No generic responses. One person, who knows your case.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Complete Transparency",
    description:
      "Your full treatment plan is confirmed in writing before you commit to anything. Every detail is documented in advance: surgeon, facility, timeline and aftercare.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

const whyIstanbul = [
  {
    title: "Global Standard, Istanbul Hospitality",
    description:
      "Rhinoplasty in Istanbul is performed to international surgical standards in a city celebrated for genuine, detail-oriented hospitality that international patients notice from the first day.",
  },
  {
    title: "World-Class Surgeons",
    description:
      "Istanbul has produced some of the world\u2019s most recognised plastic surgeons. A high volume of international patients creates a depth of experience that lower-volume markets cannot match.",
  },
  {
    title: "Modern Facilities",
    description:
      "Our partner hospitals are equipped with current surgical technology and adhere to international healthcare standards, ensuring a safe, precise and comfortable surgical experience.",
  },
  {
    title: "Where Healing Meets Wonder",
    description:
      "Recover in one of the world\u2019s great cities. The Bosphorus at golden hour, ancient architecture beside contemporary luxury. Your recovery week in Istanbul is part of the transformation.",
  },
];

const operationSteps = [
  {
    title: "Anaesthesia",
    description: "The procedure is performed under general or local anaesthesia with sedation, ensuring complete comfort.",
  },
  {
    title: "Incision",
    description: "Open: a small incision on the columella. Closed: incisions entirely inside the nostrils, leaving no visible scars.",
  },
  {
    title: "Reshaping",
    description: "The surgeon modifies bone, cartilage or both to achieve the desired shape, removing or adding structure, straightening a deviated septum or refining the nasal tip.",
  },
  {
    title: "Closing",
    description: "Skin and tissue are repositioned over the newly shaped nasal structure. A nasal splint is applied to support healing.",
  },
];

const risks = [
  {
    title: "Infection",
    risk: "Rare with proper protocol.",
    solution: "Post-operative care instructions, prescribed antibiotics and nasal hygiene protocols minimise risk.",
  },
  {
    title: "Bleeding",
    risk: "Some post-operative bleeding is normal. Excessive bleeding is rare.",
    solution: "Avoidance of blood-thinning medications and adherence to surgeon guidelines significantly reduces risk.",
  },
  {
    title: "Anaesthesia Reactions",
    risk: "A small number of patients may have adverse reactions.",
    solution: "Thorough pre-surgery medical evaluation and allergy review prevents most complications.",
  },
  {
    title: "Scarring",
    risk: "Improper healing may lead to visible scarring.",
    solution: "Surgeon selection is paramount. Avoiding smoking and sun exposure promotes proper tissue healing.",
  },
  {
    title: "Asymmetry",
    risk: "Minor asymmetries may persist as swelling resolves.",
    solution: "An experienced surgeon minimises this risk through precise planning. Revisions are discussed transparently.",
  },
];

const benefits = [
  {
    title: "Improved Facial Harmony",
    description: "Rebalances the proportion of your facial features for a more cohesive, naturally beautiful appearance.",
  },
  {
    title: "Enhanced Breathing",
    description: "Correcting structural issues like a deviated septum can significantly improve airflow during sleep and exercise.",
  },
  {
    title: "Boost in Self-Confidence",
    description: "A renewed ease in how you carry yourself, appear in photographs and engage with the world.",
  },
  {
    title: "Structural Correction",
    description: "Address congenital deformities, injuries or nasal trauma, restoring both form and function.",
  },
  {
    title: "Reduced Snoring",
    description: "Improved nasal airflow can alleviate snoring and sleep-related breathing problems.",
  },
  {
    title: "Long-Lasting Results",
    description: "Unlike temporary cosmetic treatments, rhinoplasty results are typically permanent.",
  },
];

const recoveryTimeline = [
  {
    period: "Weeks 1\u20132",
    items: [
      "Swelling, bruising and mild discomfort are normal",
      "Nasal splint worn to support healing",
      "Head elevation and rest essential",
      "Most patients return to light work by day 7\u201310",
    ],
  },
  {
    period: "Weeks 2\u20134",
    items: [
      "Swelling and bruising subside noticeably",
      "Light activities can be resumed",
      "External signs of surgery begin to fade",
    ],
  },
  {
    period: "Months 3\u20136",
    items: [
      "Significant swelling resolves, revealing defined results",
      "Nasal tissues continue to settle and refine",
      "Most patients see near-final results",
    ],
  },
];

const bookingSteps = [
  { num: "01", title: "Arrival", desc: "VIP airport transfer, hotel check-in, pre-operative bloodwork completed." },
  { num: "02", title: "Consultation & Surgery", desc: "Surgeon consultation, pre-operative markings, surgery in a private facility." },
  { num: "03", title: "Recovery", desc: "Hospital follow-up care and monitoring. Your coordinator is present throughout." },
  { num: "04", title: "Discharge", desc: "Surgeon review, medication guidance and transfer to your hotel." },
  { num: "05", title: "Rest", desc: "Quiet recovery day. Coordinator available. A gentle Bosphorus walk if you feel well." },
  { num: "06", title: "Final Visit", desc: "Surgeon check-up, splint removal, clearance for travel, written post-care instructions." },
  { num: "07", title: "Departure", desc: "VIP transfer to the airport. Coordinator available for ongoing recovery questions." },
];

const atAGlance = [
  {
    label: "Procedure Duration",
    value: "2\u20133 Hours",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Anaesthesia",
    value: "General",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-3 0v6m-5 3a5 5 0 0110 0v6a3 3 0 01-3 3h-4a3 3 0 01-3-3v-6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h10" />
      </svg>
    ),
  },
  {
    label: "Hospital Stay",
    value: "1 Night",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20V9m0 0V6a1 1 0 011-1h2a1 1 0 011 1v3m-4 0h18m0 0V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v3m4 0v11M3 15h18" />
        <circle cx="9.5" cy="12" r="1.25" />
      </svg>
    ),
  },
  {
    label: "Stay in Istanbul",
    value: "7 Days",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Back to Work",
    value: "7\u201310 Days",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    label: "Final Results",
    value: "6\u201312 Months",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.09 5.26L19.5 9l-4 3.9.94 5.6L12 15.9 7.56 18.5l.94-5.6-4-3.9 5.41-.74L12 3z" />
      </svg>
    ),
  },
];

const packageIncludes = [
  "Hospitalisation",
  "Premium Accommodation",
  "Medications",
  "Dedicated Coordinator",
  "VIP Airport Transfer",
  "Personal Translator",
  "Blood Test Analysis",
  "Post-Op Aftercare Service",
];

const specialisedApproaches = [
  {
    title: "Revision Rhinoplasty",
    tag: "Corrective",
    description:
      "A secondary procedure performed to correct aesthetic or functional issues from a previous rhinoplasty. Requires advanced expertise in scar tissue management, cartilage grafting and structural reconstruction. At Estelooma, revision cases are handled exclusively by surgeons with a dedicated revision caseload.",
  },
  {
    title: "Ethnic Rhinoplasty",
    tag: "Identity-preserving",
    description:
      "A specialised approach for patients of Middle Eastern, Afro-Caribbean, Asian and Mediterranean heritage. The goal is to refine the nose while preserving the features that define your cultural identity. Techniques vary by skin thickness, cartilage strength and the specific anatomical profile of each ethnic background.",
  },
  {
    title: "Male Rhinoplasty",
    tag: "Gender-specific",
    description:
      "Men benefit from a distinct surgical philosophy: a stronger dorsal line, a less rotated tip and a more angular bridge. Feminising a male nose is a common pitfall. Our surgeons are trained to produce masculine, balanced results that enhance without softening the face.",
  },
  {
    title: "Preservation Rhinoplasty",
    tag: "Modern technique",
    description:
      "A contemporary approach that preserves the natural dorsal ligaments and nasal architecture instead of reducing and rebuilding. Ideal for patients with a mild to moderate hump, minimal tip concerns and a preference for an unoperated look. Typically paired with piezo instruments for precision.",
  },
];

const chooseSurgeonCriteria = [
  {
    title: "Verified Board Certification",
    description:
      "Your surgeon should be board-certified in plastic and reconstructive surgery, registered with the Turkish Medical Association and ideally a member of ISAPS or EBOPRAS.",
  },
  {
    title: "Rhinoplasty-Focused Caseload",
    description:
      "Ask how many rhinoplasty procedures your surgeon performs per year. A high-volume rhinoplasty specialist (150+ cases annually) typically produces more consistent outcomes than a generalist.",
  },
  {
    title: "Unretouched Before & After Portfolio",
    description:
      "Request to see uncurated results at 6\u201312 months post-op, not immediately post-surgery. Look for case variety that matches your nose type, skin thickness and ethnic profile.",
  },
  {
    title: "Revision Policy & Transparency",
    description:
      "Understand the revision policy before you commit. Reputable surgeons disclose their revision rate and outline the process and cost for corrections if needed.",
  },
  {
    title: "Direct Surgeon Consultation",
    description:
      "Insist on a real consultation with your surgeon, not only a sales coordinator. Video consultations before travel allow you to assess communication, realism of expectations and rapport.",
  },
  {
    title: "Accredited Facility",
    description:
      "Verify that the hospital is JCI-accredited or aligned with equivalent international safety standards. The operating environment is as important as the surgeon.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    procedure: "Open Rhinoplasty",
    quote:
      "The result looks like mine, only refined. My surgeon listened carefully, the hospital was spotless and my coordinator handled every detail. I would travel to Istanbul again without hesitation.",
    age: "32",
  },
  {
    name: "Daniel R.",
    country: "Germany",
    procedure: "Preservation Rhinoplasty",
    quote:
      "I compared three clinics in Istanbul and Estelooma was the only one offering a direct video call with the surgeon before booking. That transparency made the decision easy. Healing was smoother than I expected.",
    age: "29",
  },
  {
    name: "Layla H.",
    country: "Netherlands",
    procedure: "Ethnic Rhinoplasty",
    quote:
      "I was worried my nose would be over-reduced. My surgeon understood the balance I wanted and preserved my features. Six months on, I still get compliments without anyone guessing I had surgery.",
    age: "35",
  },
];

const travelInfo = [
  {
    title: "Visa & Entry",
    description:
      "Citizens of most EU countries, the UK and many others can enter Turkey visa-free for up to 90 days. US, Australian and some other nationals qualify for an easy e-Visa issued online within minutes.",
  },
  {
    title: "Recommended Stay",
    description:
      "A minimum of 7 nights in Istanbul is required to complete consultation, surgery, recovery, splint removal and your surgeon\u2019s travel clearance. A companion is welcomed and can share accommodation at no extra cost.",
  },
  {
    title: "Accommodation",
    description:
      "We partner with 4\u20135 star hotels in central Istanbul neighbourhoods (\u015Ei\u015Fli, Ni\u015Fanta\u015F\u0131, Levent) selected for proximity to the hospital, quiet environments and recovery-friendly amenities.",
  },
  {
    title: "Transfers",
    description:
      "VIP airport pickups from Istanbul Airport (IST) or Sabiha G\u00F6k\u00E7en (SAW), and all transfers between hotel, hospital and clinic are included in your package.",
  },
  {
    title: "Language Support",
    description:
      "A dedicated English-speaking coordinator is with you throughout. Translators for Arabic, French, German, Dutch and Spanish can be arranged on request.",
  },
  {
    title: "Remote Follow-Up",
    description:
      "After you return home, your surgeon and coordinator remain available for at least 12 months via secure video follow-ups at 1 month, 3 months, 6 months and 12 months post-op.",
  },
];

const preOpGuide = [
  {
    period: "4 Weeks Before",
    items: [
      "Stop smoking and nicotine products",
      "Avoid blood-thinning supplements (fish oil, vitamin E, ginkgo)",
      "Book your surgeon video consultation",
    ],
  },
  {
    period: "2 Weeks Before",
    items: [
      "Arrange travel, companion and time off work",
      "Complete pre-operative bloodwork (included in package)",
      "Pause anti-inflammatory medications (aspirin, ibuprofen) as advised",
    ],
  },
  {
    period: "2 Days Before Arrival",
    items: [
      "Pack loose, button-front clothing for post-op comfort",
      "Confirm medications and travel documents",
      "Prepare a sleep wedge or extra pillows for elevated rest",
    ],
  },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */

export default function RhinoplastyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        name: "Rhinoplasty in Istanbul",
        alternateName: ["Nose Surgery", "Nose Reshaping", "Nose Job"],
        description:
          "Rhinoplasty is a surgical procedure that reshapes the bone and cartilage of the nose to refine appearance, correct structural issues that affect breathing, or both. Estelooma coordinates rhinoplasty in Istanbul with ISAPS-certified surgeons and JCI-aligned hospitals.",
        bodyLocation: "Nose",
        procedureType: "https://schema.org/SurgicalProcedure",
        preparation: "Stop smoking and blood-thinning medication. Complete pre-operative bloodwork and a surgeon consultation before travel.",
        howPerformed: "Performed under general anaesthesia. The surgeon modifies bone, cartilage or both using either open (external columellar incision) or closed (intranasal incisions) technique, or with piezo ultrasonic instruments. A splint is applied to support healing.",
        followup: "Splint removal at day 7. Remote follow-up by secure video at 1, 3, 6 and 12 months post-op.",
      },
      {
        "@type": "MedicalOrganization",
        name: "Estelooma",
        description:
          "Premium medical concierge coordinating rhinoplasty and cosmetic surgery in Istanbul with rigorously vetted surgeons and JCI-aligned hospitals.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Istanbul",
          addressCountry: "TR",
        },
        medicalSpecialty: "PlasticSurgery",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://estelooma.com/" },
          { "@type": "ListItem", position: 2, name: "Procedures", item: "https://estelooma.com/procedures" },
          { "@type": "ListItem", position: 3, name: "Rhinoplasty in Istanbul", item: "https://estelooma.com/procedures/rhinoplasty" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-[#FBF7F1] via-white to-white pt-20 dark:bg-none dark:bg-[#0A0908]">
        {/* Warm radial glow — top right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[38rem] w-[38rem] rounded-full opacity-70 blur-3xl dark:opacity-40"
          style={{
            background:
              "radial-gradient(closest-side, rgba(198,160,91,0.28), rgba(198,160,91,0) 70%)",
          }}
        />
        {/* Soft champagne wash — bottom left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-[-12rem] h-[34rem] w-[34rem] rounded-full opacity-60 blur-3xl dark:opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(233,214,178,0.45), rgba(233,214,178,0) 70%)",
          }}
        />
        {/* Dark-mode deep glow accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-[40rem] dark:block"
          style={{
            background:
              "radial-gradient(60rem 30rem at 80% 10%, rgba(198,160,91,0.14), transparent 60%), radial-gradient(50rem 26rem at 10% 90%, rgba(198,160,91,0.08), transparent 65%)",
          }}
        />
        {/* Decorative gold ornamental rings — abstract, off-canvas */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 h-[44rem] w-[44rem] opacity-[0.22] dark:opacity-[0.18]"
          viewBox="0 0 600 600"
          fill="none"
        >
          <circle cx="300" cy="300" r="260" stroke="url(#ring-grad-1)" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="200" stroke="url(#ring-grad-1)" strokeWidth="0.75" />
          <circle cx="300" cy="300" r="140" stroke="url(#ring-grad-1)" strokeWidth="0.5" />
          <defs>
            <linearGradient id="ring-grad-1" x1="0" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="var(--color-gold)" stopOpacity="0.9" />
              <stop offset="0.6" stopColor="var(--color-gold)" stopOpacity="0.2" />
              <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Fine grain noise — adds tactile, film-like texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            backgroundSize: "180px 180px",
          }}
        />
        {/* Decorative crescent arcs — left side counterpoint */}
        <svg
          aria-hidden
          className="pointer-events-none absolute -left-48 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 opacity-[0.18] dark:opacity-[0.14] lg:block"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path d="M250 40 A 210 210 0 0 1 460 250" stroke="url(#arc-grad)" strokeWidth="0.75" strokeLinecap="round" />
          <path d="M250 90 A 160 160 0 0 1 410 250" stroke="url(#arc-grad)" strokeWidth="0.5" strokeLinecap="round" />
          <circle cx="250" cy="40" r="2.5" fill="var(--color-gold)" />
          <circle cx="460" cy="250" r="2" fill="var(--color-gold)" opacity="0.6" />
          <defs>
            <linearGradient id="arc-grad" x1="250" y1="40" x2="460" y2="250" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="var(--color-gold)" stopOpacity="0.85" />
              <stop offset="1" stopColor="var(--color-gold)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Estelooma monogram watermark — ultra subtle editorial seal */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-8 top-28 select-none md:right-12 md:top-32"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer ring */}
            <span className="absolute inset-0 m-auto h-[13rem] w-[13rem] rounded-full border border-charcoal/[0.05] dark:border-champagne/[0.06] md:h-[17rem] md:w-[17rem] lg:h-[21rem] lg:w-[21rem]" />
            {/* Inner ring */}
            <span className="absolute inset-0 m-auto h-[11.5rem] w-[11.5rem] rounded-full border border-charcoal/[0.035] dark:border-champagne/[0.05] md:h-[15rem] md:w-[15rem] lg:h-[19rem] lg:w-[19rem]" />
            {/* Top tick */}
            <span className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 -translate-y-[1px] bg-charcoal/20 dark:bg-champagne/15" />
            {/* Micro-caps label above monogram */}
            <span className="absolute top-6 text-[8px] font-semibold uppercase tracking-[0.4em] text-charcoal/15 dark:text-champagne/20 md:top-10 lg:top-14">
              Estelooma
            </span>
            {/* Monogram E */}
            <span className="font-serif text-[9rem] font-extralight italic leading-none tracking-tight text-charcoal/[0.04] dark:text-champagne/[0.06] md:text-[12rem] lg:text-[14rem]">
              E
            </span>
            {/* Bottom micro-caps motto */}
            <span className="absolute bottom-6 text-[7px] font-semibold uppercase tracking-[0.45em] text-charcoal/15 dark:text-champagne/20 md:bottom-10 lg:bottom-14">
              Istanbul &middot; MMXXV
            </span>
          </div>
        </div>

        {/* Editorial corner brackets — top right */}
        <div aria-hidden className="pointer-events-none absolute right-6 top-28 hidden md:block">
          <div className="relative h-10 w-10">
            <span className="absolute right-0 top-0 h-5 w-px bg-gold/40" />
            <span className="absolute right-0 top-0 h-px w-5 bg-gold/40" />
          </div>
        </div>

{/* Sparkle accents — sprinkle luxury twinkles */}
        <svg aria-hidden className="pointer-events-none absolute left-[18%] top-24 h-3 w-3 text-gold/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute right-[28%] top-40 h-2 w-2 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute left-[42%] bottom-40 h-2.5 w-2.5 text-gold/35" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>

{/* Bottom fade into next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white dark:to-charcoal"
        />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 pt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal/50 dark:text-champagne/40"
          >
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <span className="text-charcoal/25 dark:text-champagne/20">/</span>
            <Link href="/procedures" className="transition-colors hover:text-gold">
              Procedures
            </Link>
            <span className="text-charcoal/25 dark:text-champagne/20">/</span>
            <span className="text-gold">Rhinoplasty</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              {/* Category pill */}
              <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/70 py-1.5 pl-1.5 pr-5 backdrop-blur-sm dark:border-gold/20 dark:bg-charcoal/50">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-4-4l4 4 4-4" />
                  </svg>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dark-gold dark:text-gold">
                  Facial Aesthetics &middot; Procedure
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-charcoal dark:text-champagne md:text-6xl lg:text-7xl">
                Rhinoplasty
                <span className="mt-1 block font-extralight italic text-gold">
                  in Istanbul
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 dark:text-champagne/55 md:text-lg">
                Expert nose reshaping performed by Istanbul&rsquo;s most
                rigorously vetted surgeons at JCI-aligned hospitals, with
                personalised concierge care from your first message to the
                final follow-up.
              </p>

              {/* Inline trust chips */}
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { k: "Journey", v: "7 days in Istanbul" },
                  { k: "Standard", v: "JCI-aligned" },
                ].map((chip) => (
                  <div
                    key={chip.v}
                    className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs shadow-sm ring-1 ring-charcoal/5 dark:bg-[#1A1817]/80 dark:ring-champagne/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-charcoal/60 dark:text-champagne/50">
                      {chip.k}
                    </span>
                    <span className="font-semibold text-charcoal dark:text-champagne">
                      {chip.v}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="#request-quote" showArrow>
                  Get a Free Quote
                </Button>
                <a
                  href="#overview"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-gold dark:text-champagne dark:hover:text-gold"
                >
                  Explore the procedure
                  <span className="transition-transform duration-200 group-hover:translate-y-0.5">
                    &darr;
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Image + floating card */}
            <div className="relative lg:col-span-5">
              <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-charcoal/5 dark:ring-champagne/10">
                <Image
                  src="/images/procedures/rhinoplasty-hero.jpg"
                  alt="Rhinoplasty in Istanbul"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
              </div>

              {/* Floating meta card */}
              <div className="absolute -bottom-6 left-4 w-[72%] max-w-[16rem] rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur-md dark:border-champagne/10 dark:bg-[#1A1817]/95 lg:-left-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Performed by
                </p>
                <p className="mt-1.5 text-sm font-semibold text-charcoal dark:text-champagne">
                  ISAPS-certified facial surgeons
                </p>
                <div className="mt-3 flex items-center gap-2 border-t border-charcoal/10 pt-3 dark:border-champagne/10">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10">
                    <svg className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-xs text-charcoal/60 dark:text-champagne/50">
                    250+ successful outcomes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <StickyNav />

      {/* ── AT A GLANCE ── */}
      <section
        id="overview"
        className="relative scroll-mt-36 bg-white pb-10 pt-12 dark:bg-charcoal lg:-mt-6 lg:pb-14 lg:pt-8"
      >
        <Container>
          <div className="overflow-hidden rounded-3xl border border-cream bg-white shadow-sm dark:border-champagne/10 dark:bg-[#1A1817]">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-cream px-6 py-5 dark:border-champagne/10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  Procedure Overview
                </p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-charcoal dark:text-champagne md:text-xl">
                  Rhinoplasty at a Glance
                </h2>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-charcoal/45 dark:text-champagne/40">
                Typical values for most patients. Your exact plan is confirmed
                by your surgeon after consultation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-cream sm:grid-cols-3 lg:grid-cols-6 dark:bg-champagne/10">
              {atAGlance.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 bg-white p-5 transition-colors hover:bg-cream/40 dark:bg-[#1A1817] dark:hover:bg-[#22201E]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/50 dark:text-champagne/40">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-charcoal dark:text-champagne">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY ISTANBUL ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Why Choose Istanbul for Rhinoplasty?"
            subtitle="The world&rsquo;s leading destination for rhinoplasty surgery, combining surgical excellence, specialist depth and a city experience worth remembering."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {whyIstanbul.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <h3 className="text-base font-semibold text-charcoal dark:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Ministry of Health Approved",
              "ISO 9001 Partner Facilities",
              "JCI-Aligned Safety Standards",
              "Verified Patient Outcomes",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-3 rounded-2xl border border-cream p-4 dark:border-champagne/10">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </span>
                <span className="text-xs font-medium text-charcoal/70 dark:text-champagne/60">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── YOUR SURGEON ── */}
      <section className="bg-gradient-to-b from-gradient-start to-gradient-end py-20">
        <Container>
          <div className="mb-8 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Your Surgeon
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-champagne md:text-3xl lg:text-4xl">
              Meet the specialist handling your case.
            </h2>
          </div>

          <Link
            href="/surgeons/rhinoplasty-lead"
            className="group block overflow-hidden rounded-3xl border border-champagne/10 bg-[#1a1715]/60 backdrop-blur-md transition-all duration-300 hover:border-gold/40 hover:bg-[#1a1715]/85"
          >
            <div className="grid grid-cols-1 md:min-h-[480px] md:grid-cols-5 lg:min-h-[520px]">
              <div className="relative aspect-[4/5] overflow-hidden md:col-span-2 md:aspect-auto">
                <Image
                  src="/images/doctors/doctor-1.jpg"
                  alt="Rhinoplasty surgeon Istanbul"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a1715]/40 md:to-[#1a1715]/60" />
              </div>

              <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-10">
                <p className="text-sm font-medium text-gold">
                  Rhinoplasty &amp; Facial Aesthetics
                </p>
                <h3 className="mt-2 text-2xl font-light text-champagne md:text-3xl">
                  Op. Dr. [Name]
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-champagne/65 md:text-base">
                  A high-volume rhinoplasty specialist known for blending
                  surgical precision with artistic vision. ISAPS-certified,
                  with 250+ successful outcomes.
                </p>

                <div className="mt-6 flex items-center gap-6 border-t border-champagne/10 pt-5">
                  {[
                    { value: "15+", label: "Years" },
                    { value: "250+", label: "Cases" },
                    { value: "ISAPS", label: "Certified" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-lg font-light text-gold">{s.value}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne/50">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-all group-hover:gap-3">
                  View full profile
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* ── THE PROCEDURE (EDITORIAL) ── */}
      <section
        id="procedure"
        className="relative scroll-mt-36 overflow-hidden py-24 dark:bg-charcoal"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(247,218,186,0.22) 0%, #FAF5EF 45%, rgba(247,218,186,0.18) 100%)",
        }}
      >
        {/* Large diffused gold glow, top-right */}
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(196,168,124,0.28), transparent 70%)",
          }}
        />

        {/* Champagne glow, bottom-left */}
        <div
          className="pointer-events-none absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(247,218,186,0.4), transparent 70%)",
          }}
        />

        {/* Thin gold divider line at top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <Container className="relative">
          <div className="lg:w-2/3">
            <div className="mb-10 text-left">
              <p className="text-base italic text-charcoal/55 dark:text-champagne/45 md:text-lg">
                Look Beautiful, Breathe Easy
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl lg:text-4xl">
                Rhinoplasty in Istanbul
              </h2>
              <p className="mt-4 text-base text-charcoal/60 dark:text-champagne/60 md:text-lg">
                A surgical procedure designed to reshape the nose, refining both
                its aesthetic appearance and its function.
              </p>
            </div>
            <article className="text-left text-charcoal/75 dark:text-champagne/60">
            <p className="text-lg leading-[1.8] md:text-xl md:leading-[1.75]">
              Rhinoplasty reshapes the bone and cartilage of the nose for
              aesthetic refinement, or corrects structural issues to improve
              breathing, or both simultaneously. It addresses concerns such as
              a crooked nose, nasal asymmetry, dorsal humps and breathing
              difficulties that reduce daily quality of life.
            </p>

            <h3 className="mt-14 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl">
              Who is a Candidate for Rhinoplasty?
            </h3>
            <p className="mt-5 text-base leading-[1.85] md:text-lg">
              Rhinoplasty is suitable for individuals over 18, once nasal
              development is complete, and for those with breathing
              difficulties caused by structural issues. Good candidates hold
              realistic expectations for natural-looking results and are in
              stable general health, free of conditions that impair healing.
              Non-smokers, or those prepared to stop before and after surgery,
              are strongly preferred. Emotional readiness is as important as
              physical readiness: the best outcomes belong to patients who
              understand the timeline of recovery and approach the decision
              with clarity.
            </p>

            <h3 className="mt-14 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl">
              Techniques Used by Istanbul Surgeons
            </h3>
            <p className="mt-5 text-base leading-[1.85] md:text-lg">
              Your surgeon will recommend the approach best suited to your
              anatomy, skin thickness and the refinement you are seeking.
              Three primary techniques are practised in Istanbul, each with
              distinct advantages.
            </p>
            <p className="mt-6 text-base leading-[1.85] md:text-lg">
              <strong className="font-semibold text-charcoal dark:text-champagne">
                Open rhinoplasty
              </strong>{" "}
              involves a small incision on the columella, the narrow strip of
              skin between the nostrils, giving the surgeon direct visibility
              of the nasal framework. It is the preferred technique for
              complex reshaping and offers maximum precision for significant
              structural changes. The resulting scar is typically invisible
              once healed.
            </p>
            <p className="mt-6 text-base leading-[1.85] md:text-lg">
              <strong className="font-semibold text-charcoal dark:text-champagne">
                Closed rhinoplasty
              </strong>{" "}
              places all incisions inside the nostrils, leaving no external
              scarring. This minimally invasive approach tends to reduce
              recovery time and causes less tissue trauma. It is well suited
              to moderate refinements where extensive structural work is not
              required.
            </p>
            <p className="mt-6 text-base leading-[1.85] md:text-lg">
              <strong className="font-semibold text-charcoal dark:text-champagne">
                Piezo rhinoplasty
              </strong>{" "}
              uses ultrasonic instruments for precise bone cutting and
              reshaping. By preserving surrounding soft tissues, piezo surgery
              typically results in less bruising, reduced post-operative
              swelling and a faster return to a natural appearance. It is
              frequently combined with preservation techniques for patients
              who want an unoperated look.
            </p>
            <p className="mt-10 border-l-2 border-gold/50 pl-5 text-base italic leading-[1.85] text-charcoal/60 dark:text-champagne/50 md:text-lg">
              The technique is decided during your consultation after a
              detailed examination of your nasal structure. There is no single
              &ldquo;best&rdquo; method. Only the right one for you.
            </p>
          </article>
          </div>
        </Container>
      </section>

      {/* ── SPECIALISED APPROACHES ── */}
      <section id="techniques" className="scroll-mt-36 bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Specialised Rhinoplasty Approaches"
            subtitle="Beyond the standard techniques, certain patients benefit from a specialised approach tailored to anatomy, previous surgery or cultural identity."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {specialisedApproaches.map((approach) => (
              <div
                key={approach.title}
                className="rounded-2xl border border-champagne/40 bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-charcoal dark:text-champagne">
                    {approach.title}
                  </h3>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-gold dark:text-gold">
                    {approach.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── HOW IS IT PERFORMED ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="How Is Rhinoplasty Performed in Istanbul?"
            subtitle="A step-by-step overview of what happens during your procedure."
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {operationSteps.map((step, i) => (
              <div key={step.title} className="relative">
                <span className="block text-8xl font-extralight leading-none text-champagne lg:text-9xl dark:text-champagne/20">
                  {String(i + 1).padStart(2, "0")}
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

      {/* ── RISKS & SOLUTIONS ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Potential Risks & Solutions"
            subtitle="Complete transparency is the foundation of informed consent. Here is an honest overview."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <h3 className="text-base font-semibold text-charcoal dark:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-charcoal/40 dark:text-champagne/35">
                  {item.risk}
                </p>
                <div className="mt-auto pt-4 border-t border-cream dark:border-champagne/10">
                  <p className="text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                    <span className="font-semibold text-gold">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── HOW TO CHOOSE A SURGEON ── */}
      <section id="surgeon" className="scroll-mt-36 bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="How to Choose Your Rhinoplasty Surgeon in Istanbul"
            subtitle="Istanbul has hundreds of clinics advertising rhinoplasty. Not all operate to the same standard. These are the six checks that separate a reliable surgeon from a risky one."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chooseSurgeonCriteria.map((item, i) => (
              <div
                key={item.title}
                className="relative flex flex-col rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")} &middot; Check
                </span>
                <h3 className="mt-3 text-base font-semibold text-charcoal dark:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-charcoal/55 dark:text-champagne/45">
            Every surgeon in the Estelooma network is pre-screened against these
            six criteria. Fewer than 3% of Istanbul practitioners qualify for
            partnership.
          </p>
        </Container>
      </section>

      {/* ── KEY BENEFITS ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Key Benefits of Rhinoplasty in Istanbul"
            subtitle="More than cosmetic. Rhinoplasty can improve both appearance and quality of life."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <h3 className="text-base font-semibold text-charcoal dark:text-champagne">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── RECOVERY TIMELINE ── */}
      <section id="recovery" className="scroll-mt-36 bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Recovery Timeline"
            subtitle="Every patient recovers differently. This timeline reflects the experience of most Estelooma rhinoplasty patients."
          />

          {/* Milestone progression strip */}
          <div className="mx-auto mt-12 max-w-4xl px-2">
            <div className="relative">
              <div className="absolute left-[11px] right-[11px] top-[10px] h-[2px] bg-charcoal/10 dark:bg-champagne/10" />
              <div className="absolute left-[11px] right-[11px] top-[10px] h-[2px] bg-gradient-to-r from-gold via-gold/70 to-gold/20" />
              <div className="relative flex justify-between">
                {[
                  { label: "Day 1", note: "Surgery" },
                  { label: "Day 7", note: "Splint off" },
                  { label: "Week 2", note: "Back to work" },
                  { label: "Week 4", note: "Light activity" },
                  { label: "Month 3", note: "Defined result" },
                  { label: "Month 6+", note: "Final result" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col items-center gap-3 first:items-start last:items-end"
                  >
                    <span className="h-[22px] w-[22px] rounded-full bg-white ring-4 ring-gold dark:bg-[#0F0D0C] dark:ring-gold/80">
                      <span className="block h-full w-full rounded-full bg-gradient-to-br from-gold to-dark-gold" />
                    </span>
                    <div className="text-center group-[]:first:text-left group-[]:last:text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal dark:text-champagne">
                        {m.label}
                      </p>
                      <p className="mt-1 hidden text-[10px] text-charcoal/45 dark:text-champagne/40 sm:block">
                        {m.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recoveryTimeline.map((phase, i) => (
              <div
                key={phase.period}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-cream bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-champagne/10 dark:bg-[#292524]"
              >
                {/* Header with number + progress pills */}
                <div className="flex items-start justify-between bg-gradient-to-br from-cream/60 to-white px-6 pb-5 pt-6 dark:from-[#22201E] dark:to-[#292524]">
                  <span className="text-6xl font-extralight leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1 pt-3">
                    {recoveryTimeline.map((_, j) => (
                      <span
                        key={j}
                        className={`h-1 rounded-full transition-all ${
                          j <= i
                            ? "w-6 bg-gold"
                            : "w-3 bg-charcoal/10 dark:bg-champagne/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 px-6 pb-6 pt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-dark-gold dark:text-gold">
                    Phase {i + 1}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-charcoal dark:text-champagne">
                    {phase.period}
                  </h3>
                  <ul className="mt-5 space-y-3 border-t border-cream pt-5 dark:border-champagne/10">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/65 dark:text-champagne/55"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                          <svg
                            className="h-2.5 w-2.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-charcoal/50 dark:text-champagne/40">
            Final results typically emerge between months 6 and 12 as residual
            swelling fully resolves. Your coordinator will stay in touch
            throughout your healing journey.
          </p>
        </Container>
      </section>

      {/* ── PRE-OP PREPARATION ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="How to Prepare for Rhinoplasty"
            subtitle="A structured pre-operative routine improves surgical outcomes and shortens recovery. Your coordinator will guide you through each milestone."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {preOpGuide.map((phase, i) => (
              <div
                key={phase.period}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-sm font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-charcoal dark:text-champagne">
                  {phase.period}
                </h3>
                <ul className="mt-3 space-y-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BOOKING PROCESS ── */}
      <section id="journey" className="scroll-mt-36 bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Your 7-Day Journey"
            subtitle="Every detail of your Istanbul journey is arranged before you arrive. You make one decision: to begin."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, i) => (
              <div
                key={step.num}
                className="group relative flex flex-col rounded-2xl border border-champagne/40 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md dark:border-champagne/10 dark:bg-[#292524]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-dark-gold dark:text-gold">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Day {i + 1}
                  </span>
                  <span className="text-2xl font-extralight leading-none text-champagne dark:text-champagne/25">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-charcoal dark:text-champagne">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PACKAGE ── */}
      <section id="package" className="scroll-mt-36 bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Your All-Inclusive Rhinoplasty Package"
            subtitle="Every essential of your Istanbul journey is arranged in advance. One package. Complete care. No surprises on the day."
          />
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-cream dark:border-champagne/10">
            <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne/50">
                Estelooma &middot; Rhinoplasty Package
              </p>
              <p className="mt-2 text-2xl font-light text-champagne md:text-3xl">
                Everything you need, handled from first message to final follow-up.
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {packageIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <svg className="h-3 w-3 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-charcoal/70 dark:text-champagne/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-cream pt-4 text-xs text-charcoal/40 dark:border-champagne/10 dark:text-champagne/35">
                Your treatment plan is confirmed in writing before any
                commitment. Every detail is documented in advance so your
                Istanbul experience feels effortless from arrival to departure.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button href="#request-quote" showArrow>
              Request Your Personalised Plan
            </Button>
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="reviews" className="scroll-mt-36 bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="What Estelooma Patients Say"
            subtitle="Verified international patients who completed their rhinoplasty journey in Istanbul."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70 dark:text-champagne/60">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-cream pt-4 dark:border-champagne/10">
                  <p className="text-sm font-semibold text-charcoal dark:text-champagne">
                    {t.name}, {t.age}
                  </p>
                  <p className="text-xs text-charcoal/50 dark:text-champagne/40">
                    {t.procedure} &middot; {t.country}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-36 bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about rhinoplasty at Estelooma."
          />
          <div className="mx-auto max-w-3xl">
            <RhinoplastyFAQ />
          </div>
        </Container>
      </section>

      {/* ── TRAVEL & PRACTICAL INFO ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Travel & Practical Information for International Patients"
            subtitle="Everything you need to know about planning your rhinoplasty journey to Istanbul, from visa to aftercare."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelInfo.map((info) => (
              <div
                key={info.title}
                className="rounded-2xl border border-cream bg-white p-6 dark:border-champagne/10 dark:bg-[#292524]"
              >
                <h3 className="text-base font-semibold text-charcoal dark:text-champagne">
                  {info.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── EXPLORE ISTANBUL ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Explore Istanbul During Your Recovery"
            subtitle="Your recovery is not a waiting period. It is part of the experience."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { src: "/images/istanbul/bosphorus.jpg", label: "Bosphorus" },
              { src: "/images/istanbul/sultanahmet.jpg", label: "Sultanahmet" },
              { src: "/images/istanbul/galata.jpg", label: "Galata" },
            ].map((img) => (
              <div key={img.label} className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent transition-all duration-500 group-hover:from-champagne/90 group-hover:via-champagne/30" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-base font-semibold text-white transition-colors duration-500 group-hover:text-charcoal md:text-lg">
                    {img.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 mx-auto max-w-2xl text-center text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
            Estelooma can arrange private, paced city experiences, from
            Bosphorus boat tours to private Bazaar visits and rooftop dining.
            Everything at your pace, with your comfort as the priority.
          </p>
        </Container>
      </section>

      {/* ── BEFORE & AFTER ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <SectionHeading
            title="Results That Speak for Themselves"
            subtitle="Every image shown is an Estelooma patient. No retouching. No filters."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { label: "Open Rhinoplasty", country: "United Kingdom" },
              { label: "Piezo Rhinoplasty", country: "Germany" },
              { label: "Closed Rhinoplasty", country: "Netherlands" },
            ].map((item) => (
              <div key={item.label} className="overflow-hidden rounded-2xl border border-cream dark:border-champagne/10">
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
                  <p className="text-xs text-charcoal/50 dark:text-champagne/40">
                    {item.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── ABOUT ESTELOOMA ── */}
      <section className="bg-white py-20 dark:bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/team-photo.jpg"
                alt="Estelooma team in Istanbul"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                About Estelooma
              </p>
              <h2 className="mt-4 text-2xl font-light tracking-tight text-charcoal dark:text-champagne md:text-3xl lg:text-4xl">
                Where Care Meets Precision
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                We are a premium medical concierge brand based in Istanbul,
                connecting international patients with Istanbul&apos;s most
                rigorously selected plastic surgeons. Our unwavering commitment
                to quality, safety and individual care has established us as a
                leading partner for rhinoplasty journeys.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                <strong className="font-semibold text-charcoal dark:text-champagne">
                  Our Mission:
                </strong>{" "}
                To coordinate every detail of your transformation, from
                the first enquiry to the moment you return home renewed. Peace
                of mind, from start to finish.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── WHY ESTELOOMA ── */}
      <section className="bg-cream py-20 dark:bg-[#0F0D0C]">
        <Container>
          <SectionHeading
            title="Why Choose Estelooma?"
            subtitle="Everything about your rhinoplasty journey is curated for comfort, safety and exceptional results."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyEstelooma.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-champagne/30 text-dark-gold dark:bg-gold/10 dark:text-gold">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-charcoal dark:text-champagne">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60 dark:text-champagne/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROCEDURE FORM ── */}
      <section
        id="request-quote"
        className="relative scroll-mt-36 overflow-hidden bg-gradient-to-br from-gradient-start to-gradient-end py-20"
      >
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(196,168,124,0.2), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(247,218,186,0.15), transparent 70%)",
          }}
        />
        <Container className="relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                Start Your Journey
              </p>
              <h2 className="mt-4 text-3xl font-light leading-[1.15] tracking-tight text-champagne md:text-4xl lg:text-5xl">
                Request your rhinoplasty consultation.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-champagne/65 md:text-lg">
                Share a few details and your dedicated coordinator will reply
                within 24 hours with a personalised plan, surgeon options and
                next steps. Consultation is free and non-binding.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-champagne/60">
                {[
                  "Reply within 24 hours",
                  "Direct video consultation with your surgeon",
                  "No obligation, no hidden fees",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-champagne/10 bg-white p-6 shadow-2xl dark:bg-[#1a1715] sm:p-8">
                <ProcedureQuoteForm procedureName="Rhinoplasty" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
