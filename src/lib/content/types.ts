export interface FaqItem {
  q: string;
  a: string;
}

export interface League {
  slug: string;
  name: string;
  country: string;
  region: Region;
  flag: string;
  intro: string;
  keyInfo: string[];
  faqs: FaqItem[];
  popularity: number;
}

export type Region =
  | "International"
  | "Europe"
  | "South America"
  | "North & Central America"
  | "Asia & Oceania"
  | "Africa";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "link"; text: string; href: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: Author;
  category: string;
  tags: string[];
  readMinutes: number;
  intro: string;
  sections: ContentBlock[];
  faqs: FaqItem[];
}

export interface Author {
  name: string;
  url: string;
}
