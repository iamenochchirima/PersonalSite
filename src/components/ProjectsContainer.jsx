import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaEye } from "react-icons/fa";
import {projects} from "@/constants";

const ProjectsContainer = () => {
  return (
    <div>
      <div className="justify-center items-center">
        <h1 className="font-poppins text-3xl font-bold text-white text-center">
          Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center justify-center">
        {projects.map((project) => {
          return (
            <div
              className="max-w-sm rounded-md overflow-hidden shadow-slate-400 shadow-md  md:col-span-1 lg:col-span-1 my-10 mx-4"
              key={project.id}
            >
              <Image src={project.imageSrc} alt="project-image" width={500} height={500} />
              <div className="px-6 py-4">
                <div className="font-semibold text-white text-xl mb-2 text-center">
                  {project.title}
                </div>
                <div className="">{project.description}</div>
                <div className="my-4 ">
                  <ul className="list-none  items-center flex flex-wrap ">
                    {project.tools.map((tool) => (
                      <li
                        className="bg-gray-800 rounded-lg  px-1 m-1"
                        key={tool}
                      >
                        {tool}
                      </li>
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
  );
};

export default ProjectsContainer;
