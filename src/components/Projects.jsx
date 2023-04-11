import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaEye } from "react-icons/fa";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div className="px-5 md:px-10">
      <div className="justify-center items-center">
        <h1 className="font-poppins text-3xl font-bold text-white text-center">
          My Projects
        </h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 justify-items-center justify-center">
        {projects.map((project) => {
          return (
            <div
              className="max-w-sm bg-gray-900 overflow-hidden  md:col-span-1 lg:col-span-1 my-10"
              key={project.id}
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={project.imageSrc}
                  alt="project-image"
                  className="absolute"
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                  sizes="100vw"
                />
              </div>
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
                  {project.codeLink ? (
                    <Link
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-gray-900 px-2 py-1"
                    >
                      <button className="hover:bg-gray-700 rounded-full p-2 flex items-center">
                        <FaCode /> <span className="ml-2">Code</span>
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="rounded flex items-center opacity-40"
                      title={!project.codeLink ? "Code unavailable" : ""}
                    >
                      <FaCode /> <span className="ml-2">Code</span>
                    </button>
                  )}
                  {project.visitLink ? (
                    <Link
                      href={project.visitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-gray-900 px-2 py-1"
                    >
                      <button className="hover:bg-gray-700 rounded-full p-2 flex items-center">
                        <FaEye /> <span className="ml-2">Visit Site</span>
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="rounded flex items-center opacity-40"
                      title={!project.visitLink ? "Link unavailable" : ""}
                    >
                      <FaEye /> <span className="ml-2">Visit Site</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/iamenochchirima?tab=repositories"
        >
          <h1 className="text-center text-white">
            <span className="bg-gray-900 hover:bg-gray-700 rounded-full p-2">See more projects on my Github Here</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
