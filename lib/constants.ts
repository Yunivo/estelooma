import type { NavItem, USP, Step, Statistic, Testimonial } from "./types";

export const navItems: NavItem[] = [
  { label: "Procedures", href: "/procedures", hasMegaMenu: true },
  { label: "Before & Afters", href: "/before-after" },
  { label: "Our Patients", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  {
    label: "About",
    href: "/about",
    subItems: [
      {
        label: "About Us",
        href: "/about",
        description: "Our story, mission and the standards behind every Estelooma journey.",
      },
      {
        label: "Our Doctors",
        href: "/about/our-doctors",
        description: "The rigorously vetted surgeons we partner with in Istanbul.",
      },
      {
        label: "Our Hospitals",
        href: "/about/our-hospitals",
        description: "JCI-aligned facilities where every procedure takes place.",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const usps: USP[] = [
  {
    title: "Expert Surgeons",
    description:
      "Board-certified surgeons with decades of experience and international recognition.",
  },
  {
    title: "JCI-Accredited Hospitals",
    description:
      "Procedures performed in world-class facilities meeting the highest global standards.",
  },
  {
    title: "VIP Transfers",
    description:
      "Private airport pickup, hotel transfers, and clinic transportation throughout your stay.",
  },
  {
    title: "Premium Accommodation",
    description:
      "Carefully selected luxury hotels for a comfortable recovery experience.",
  },
  {
    title: "Dedicated Aftercare",
    description:
      "Comprehensive follow-up care and 24/7 support from consultation to full recovery.",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Free Consultation",
    description:
      "Share your goals with our medical team and receive a personalized treatment plan.",
  },
  {
    number: 2,
    title: "Treatment Plan",
    description:
      "Review your custom plan including procedure details, pricing, and travel arrangements.",
  },
  {
    number: 3,
    title: "Travel & Surgery",
    description:
      "Arrive in Istanbul with VIP transfers and undergo your procedure at a top-tier hospital.",
  },
  {
    number: 4,
    title: "Recovery & Aftercare",
    description:
      "Recover comfortably with dedicated post-operative care and ongoing follow-up support.",
  },
];

export const statistics: Statistic[] = [
  { value: 5000, suffix: "+", label: "Happy Patients" },
  { value: 50, suffix: "+", label: "Expert Surgeons" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Partner Hospitals" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    country: "United Kingdom",
    procedure: "Rhinoplasty",
    quote:
      "From the very first consultation to my follow-up appointments, the care I received was exceptional. My results exceeded all expectations.",
    rating: 5,
  },
  {
    name: "James K.",
    country: "Germany",
    procedure: "Hair Transplant",
    quote:
      "The entire process was seamless. The VIP transfers, luxury hotel, and world-class medical team made everything effortless.",
    rating: 5,
  },
  {
    name: "Maria L.",
    country: "Netherlands",
    procedure: "Tummy Tuck",
    quote:
      "I felt safe and cared for throughout my journey. The results are incredible, and the aftercare support has been outstanding.",
    rating: 5,
  },
];
