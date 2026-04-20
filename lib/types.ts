export interface Procedure {
  name: string;
  slug: string;
}

export interface SubCategory {
  name: string;
  slug: string;
  procedures: Procedure[];
}

export interface ProcedureCategory {
  name: string;
  slug: string;
  description: string;
  subCategories: SubCategory[];
}

export interface Testimonial {
  name: string;
  country: string;
  procedure: string;
  quote: string;
  rating: number;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface USP {
  title: string;
  description: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  subItems?: NavSubItem[];
}
