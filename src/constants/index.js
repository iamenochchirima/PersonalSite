import {
  SiDjango,
  SiJavascript,
  SiFlask,
  SiNextdotjs,
  SiSocketdotio,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiRedux,
  SiDocker,
  SiMaterialui,
  SiTailwindcss,
  SiFigma,
  SiGooglecloud,
} from "react-icons/si";
import { FaCss3, FaHtml5, FaPython, FaReact, FaAws } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import Image from "next/image";

export const projects = [
  {
    id: 1,
    title: "Modern Minds Magazine",
    imageSrc: "/mmm.png",
    description:
      "A full stack website for the Modern Minds Magazine. It consists of a newsletter system using a third party email servive, secure user registration and authentication system and a user-friendly interface for browsing and reading articles",
    tools: [
      "Python",
      "Django",
      "JavaScript",
      "Next.js",
      "Redux toolkit",
      "Tailwind css",
      "Postgresql",
      "Google Cloud",
    ],
    codeLink: "https://github.com/iamenochchirima/ModernMinds",
    visitLink: "https://www.modernmindsmag.com/",
  },
  {
    id: 2,
    title: "Rose Normans Foundation",
    imageSrc: "/foundation.png",
    description:
      "A simple full stack website for Rose Normans Foundation, with a blog and other simple rest api fetching functionality",
    tools: ["Next.js", "Tailwind css", "Django", "Postgresql"],
    codeLink: "https://github.com/iamenochchirima/RoseNormansFoundation",
    visitLink: "https://rose-normans-foundation.vercel.app/",
  },
  {
    id: 3,
    title: "EXODT",
    imageSrc: "/coming-soon.jpg",
    description:
      "Exodt is a social web app I am creating using django rest framework and next.js. It has real time communication system which I implimented using socket.io, real time notifications, instant direct messages and group chating.",
    tools: ["Django", "Next.js", "Node.js", "Express", "Socket.io" , "Redux toolkit", "RTK Query", "Tailwind css" , "AWS" , "Postgresql"],
    codeLink: "https://github.com/iamenochchirima/Exodt",
    visitLink: null,
  },
];

export const tools = [
  {
    id: 1,
    name: "Python",
    icon: <FaPython />,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript  />,
  },
  {
    id: 21,
    name: "Motoko",
    icon: <Image src="/motoko.png" height={50} width={50} alt="motoko icon" />,
  },
  {
    id: 3,
    name: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 4,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    name: "Django",
    icon: <SiDjango />,
  },
  {
    id: 6,
    name: "Flask",
    icon: <SiFlask />,
  },
  {
    id: 7,
    name: "Node",
    icon: <SiNodedotjs />,
  },
  {
    id: 8,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 9,
    name: "Redux-toolkit",
    icon: <SiRedux />,
  },
  {
    id: 10,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 11,
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    id: 12,
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    id: 13,
    name: "Postgresql",
    icon: <SiPostgresql />,
  },
  {
    id: 14,
    name: "Git",
    icon: <DiGit />,
  },
  {
    id: 15,
    name: "Docker",
    icon: <SiDocker />,
  },
  {
    id: 16,
    name: "AWS",
    icon: <FaAws />,
  },
  {
    id: 20,
    name: "Google Cloud",
    icon: <SiGooglecloud />,
  },
  {
    id: 17,
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    id: 19,
    name: "Figma",
    icon: <SiFigma />,
  },
];
