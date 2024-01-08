import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img6 from "@/public/img6.png";
import img5 from "@/public/img5.png";

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
    title: "Graduation",
    location: "Noida",
    description:
      "I have done my engineering from NIET Greater Noida in electronics and communication.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Bootcamp",
    location: "Remote",
    description:
      "I graduted from Namaste React bootcamp, I got immediately an internship in ProductPins",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "ChatOn",
    description:
      "It's a chatting application where user can chat and make personal rooms for interaction through text, voice and media files",
    tags: ["React", "Next.js", "MaterialUi", "Firebase"],
    imageUrl: img2,
  },
  {
    title: "JSM Headphones",
    description:
      "Ecommerce application for selling premium headphones with online payment integration through react",
    tags: ["React", "Next.js", "Sanity", "Stripe"],
    imageUrl: img3,
  },
  {
    title: "Netflix-Gpt",
    description: "Netflix clone with openAi integration for movie suggestion",
    tags: ["React", "Vite", "Firebase", "Tailwind", "Redux"],
    imageUrl: img6,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
