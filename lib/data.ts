import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "12th Grade",
    location: "Bangalore, KA",
    description:
      "Completed 12th grade with a focus on Physics, Chemistry, Mathematics, and Computer Science, achieving an outstanding Class XII Percentage of 95.4%.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Undergraduate Student",
    location: "Surathkal, KA",
    description:
      "Pursuing B.Tech in Electronics and Communication Engineering at NIT-K Surathkal, crafting my journey through technology, innovation, and learning.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Back-End Developer",
    location: "Surathkal, KA",
    description:
      "Working as a Back-End Developer for the IET NITK Club Website. My stack includes Django, Python, Next.js, TypeScript, Tailwind, React. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "C++ Threaded Storage",
    description:
      "C++ distributed system with interconnected computers, multithreaded clients, vector clocks, TCP, RPC, Chandy-Lamport for causal consistency snapshots",
    tags: ["C++", "Multi-Threading","Distributed Systems"],
    imageUrl: corpcommentImg,
  },
  {
    title: "LeetCode Clone",
    description:
      "Built question page, authentication, backend, and code execution engine for user-submitted code",
    tags: ["Express", "MongoDB", "Mongoose", "Typescript", "React","Tailwind CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Club Events Manager",
    description:
      "College club tracking app interfacing with Google Calendar, SQL database, allowing admin event updates, HTTP API interactions, and authentication",
    tags: ["Ruby on Rails", "HTML", "SQL", "CSS","Javascript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C",
  "C++",
  "Java",
  "Python",
  "Django",
  "OpenCV",
  "Framer Motion",
] as const;
