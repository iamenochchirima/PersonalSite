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
    title: "Exodt",
    imageSrc: "/setup.jpg",
    description:
      "An eBay-like e-commerce auction site that will allow users to post auction listings, place bids on listings, comment on those listings, and add listings to a “watchlist.” CS50W PROJECT-2",
    tools: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    codeLink: "https://github.com/yourusername/yourproject",
    visitLink: "https://www.yoursite.com",
  },
  {
    id: 2,
    title: "Commerce",
    imageSrc: "/setup2.jpg",
    description: "My Second Project",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    codeLink: "https://github.com/yourusername/yourproject",
    visitLink: "https://www.yoursite.com",
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
