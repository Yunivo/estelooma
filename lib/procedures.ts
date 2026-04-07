import type { ProcedureCategory } from "./types";

export const procedureCategories: ProcedureCategory[] = [
  {
    name: "Cosmetic Surgery",
    slug: "cosmetic-surgery",
    description:
      "Transform your appearance with our expert cosmetic procedures for body, breast, face, and more.",
    subCategories: [
      {
        name: "Body",
        slug: "body",
        procedures: [
          { name: "Brazilian Butt Lift", slug: "brazilian-butt-lift" },
          { name: "Vaser Liposuction", slug: "vaser-liposuction" },
          { name: "Tummy Tuck", slug: "tummy-tuck" },
          { name: "Arm Lift", slug: "arm-lift" },
          { name: "Thigh Lift", slug: "thigh-lift" },
        ],
      },
      {
        name: "Breast",
        slug: "breast",
        procedures: [
          { name: "Gynecomastia", slug: "gynecomastia" },
          { name: "Breast Lift", slug: "breast-lift" },
          { name: "Breast Reduction", slug: "breast-reduction" },
          { name: "Breast Augmentation", slug: "breast-augmentation" },
        ],
      },
      {
        name: "Face",
        slug: "face",
        procedures: [
          { name: "Brow Lift", slug: "brow-lift" },
          { name: "Neck Lift", slug: "neck-lift" },
          { name: "Face Lift", slug: "face-lift" },
          { name: "Otoplasty", slug: "otoplasty" },
          { name: "Eyelid Surgery", slug: "eyelid-surgery" },
          { name: "Chin Implant", slug: "chin-implant" },
          { name: "Dimpleplasty", slug: "dimpleplasty" },
          { name: "Buccal Fat Removal", slug: "buccal-fat-removal" },
          { name: "Forehead Reduction", slug: "forehead-reduction" },
        ],
      },
      {
        name: "Genital",
        slug: "genital",
        procedures: [
          { name: "Labiaplasty", slug: "labiaplasty" },
          { name: "Penis Enlargement", slug: "penis-enlargement" },
          { name: "Vaginoplasty", slug: "vaginoplasty" },
          { name: "Pubic Lift", slug: "pubic-lift" },
        ],
      },
    ],
  },
  {
    name: "Weight Loss",
    slug: "weight-loss",
    description:
      "Achieve lasting results with advanced bariatric procedures performed by leading surgeons.",
    subCategories: [
      {
        name: "Weight Loss",
        slug: "weight-loss",
        procedures: [
          { name: "Gastric Sleeve Surgery", slug: "gastric-sleeve-surgery" },
          {
            name: "Gastric Balloon Surgery",
            slug: "gastric-balloon-surgery",
          },
          { name: "Gastric Bypass Surgery", slug: "gastric-bypass-surgery" },
          {
            name: "Gastric Transit Bipartition Surgery",
            slug: "gastric-transit-bipartition-surgery",
          },
        ],
      },
    ],
  },
  {
    name: "Rhinoplasty",
    slug: "rhinoplasty",
    description:
      "Achieve natural-looking results with expert nose surgery tailored to your features.",
    subCategories: [
      {
        name: "Rhinoplasty",
        slug: "rhinoplasty",
        procedures: [
          {
            name: "Caucasian Rhinoplasty",
            slug: "caucasian-rhinoplasty",
          },
          { name: "Ethnic Rhinoplasty", slug: "ethnic-rhinoplasty" },
          { name: "Asian Nose Surgery", slug: "asian-nose-surgery" },
        ],
      },
    ],
  },
  {
    name: "Eye",
    slug: "eye",
    description:
      "Restore your vision with cutting-edge ophthalmology procedures.",
    subCategories: [
      {
        name: "Ophthalmology",
        slug: "ophthalmology",
        procedures: [
          { name: "Lasik Eye Surgery", slug: "lasik-eye-surgery" },
        ],
      },
    ],
  },
];
