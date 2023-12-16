import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type TimeLineItem = {
    date: string;
    icon: React.ReactNode;
    title: string;
    location: string;
    description: string;
  };
