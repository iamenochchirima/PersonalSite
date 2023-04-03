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
} from "react-icons/si";
import { FaCss3, FaHtml5, FaPython, FaReact, FaAws } from "react-icons/fa";
import { DiGit } from "react-icons/di";

export const projects = [
  {
    id: 1,
    title: "Modern Minds Magazine",
    imageSrc: "/mmm.png",
    description:
      "A full stack project for the Modern Minds Magazine website. It consist of a newsletter system using a third party email servive, secure user registration functionality, and a user-friendly interface for browsing and reading articles",
    tools: ["Python", "Django", "JavaScript", "Next.js", "Redux toolkit", "Tailwind css", "Postgresql", "AWS"],
    codeLink: "https://github.com/iamenochchirima/ModernMinds",
    visitLink: "https://www.modernmindsmag.com/",
  },
  {
    id: 2,
    title: "Rose Normans Fooundation",
    imageSrc: "/foundation.png",
    description: "A simple full stack website for Rose Normans Foundation, with a blog and other simple rest api fetching functinality",
    tools: ["Next.js", "Tailwind css", "Django", "Postgresql"],
    codeLink: "https://github.com/iamenochchirima/RoseNormansFoundation",
    visitLink: "https://rose-normans-foundation.vercel.app/",
  },
  {
    id: 3,
    title: "EXODT",
    imageSrc: "/setup1.jpg",
    description: "Fusce tempus nibh urna, vitae venenatis lorem malesuada ac. Cras vehicula iaculis hendrerit. Proin dictum mauris quis eros tincidunt, id pretium arcu tempus. Sed ac sem ut augue pharetra rhoncus vel",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    codeLink: null,
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
    icon: <SiJavascript />,
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
    id: 17,
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    id: 18,
    name: "Material Ui",
    icon: <SiMaterialui />,
  },
  {
    id: 19,
    name: "Figma",
    icon: <SiFigma />,
  },
];
