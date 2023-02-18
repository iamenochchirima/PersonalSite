import Image from "next/image";
import setup from "../../public/setup.jpg";
import styles from "@/styles/styles";
import React, { useRef } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import { FaCode, FaEye } from "react-icons/fa";
import projects from "@/constants";

const Content = () => {

  const scrollRef = useRef();

  return (
    <section
      id="home"
      className={`grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 ${styles.paddingY}`}
    >
      <div
        className="col-span-1 md:col-span-2 lg:col-span-2 xl:px-0 sm:px-16 px-6 sm:align-middle posit"
      >
        
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white  leading-[20px] w-full">
          Welcome!
        </h1>
        <p className={`${styles.paragraph} mt-10 leading-6`}>
          I'm Enoch Chirima, a full-stack software developer. I create websites
          and web applications solving real-world problems. With expertise in
          back-end and front end development. Are you looking for a freelance
          developer or seeking to hire a full-time team member?, Let's connect
          and chat about how I can bring my skills and experience to your next
          projects on the links below!
        </p>

        <div className=" text-5xl flex justify-center py-10 space-x-4">
          <a href="https://api.whatsapp.com/send?phone=0774266830">
            <RiWhatsappFill />
          </a>
          <a href="https://www.linkedin.com/in/iamenochchirima/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/iamenochchirima">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/iamenochchirima">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>

      <div style={{overflow: "scroll"}} ref={scrollRef} className="hide-scrollbar col-span-1 md:col-span-3 lg:col-span-3 md:my-0 my-10 lg:mr-10 lg:pr-6">
        <div className="justify-center items-center">
          <h1 className="font-poppins text-3xl font-bold text-white text-center">
            Projects
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center justify-center">
          {projects.map((project) => {
            return (
              <div
                className="max-w-sm rounded-md overflow-hidden shadow-slate-400 shadow-md col-span-1 md:col-span-2 lg:col-span-1 my-10 mx-4"
                key={project.id}
              >
                <Image src={project.imageSrc} width={500} height={500} />
                <div className="px-6 py-4">
                  <div className="font-semibold text-white text-xl mb-2 text-center">
                    {project.title}
                  </div>
                  <div className="text-justify">{project.description}</div>
                  <div className="my-4 ">
                    <ul className="list-none  items-center flex flex-wrap ">
                      {project.tools.map((tool) => (
                        <li className="bg-gray-800 rounded-lg  px-1 m-1" key={tool}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center text-white space-x-10">
                    <Link
                      href={project.codeLink}
                      className=" hover:bg-gray-900 px-2 py-1 rounded flex items-center"
                    >
                      <FaCode /> <span className="ml-2">Code</span>
                    </Link>
                    <Link
                      href={project.visitLink}
                      className="hover:bg-gray-900 px-2 py-1 rounded flex items-center"
                    >
                      <FaEye /> <span className="ml-2">Visit Site</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
