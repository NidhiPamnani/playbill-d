export type Show = {
  title: string;
  venue: string;
  date: string;
  rating: number;
  image?: string;
  imageAlt?: string;
  position?: string;
};

export type NavName = "home" | "diary" | "profile";