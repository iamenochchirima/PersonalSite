import styles from "@/styles/styles";
import React, { useRef } from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import ProjectsContainer from "./ProjectsContainer";
import Tools from "./Tools";

const Content = () => {

  return (
    <section
      id="home"
      className={`grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 mt-24 gap-4 ${styles.paddingY}`}
    >
      <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:px-0 sm:px-16 px-6 sm:align-middle">
        <div className="md:fixed md:w-2/6">
          <h1 className="font-poppins text-center font-semibold ss:text-[68px] text-[52px] text-white  leading-[25px] p-5 bg-gradient-to-r text-gradient from-blue-400 via-green-200 to-indigo-300 text-transparent bg-clip-text">
            Welcome!
          </h1>
          <p className={`${styles.paragraph} text-justify mt-2 font-medium leading-6`}>
            I am Enoch Chirima, a full-stack software developer. I create
            websites and web applications solving real-world problems. With
            expertise in back-end and front end development. Are you looking for
            a freelance developer or seeking to hire a full-time team member?,
            Lets connect and chat about how I can bring my skills and
            experience to your next projects on the links below!
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
      </div>
      <div className="md:col-span-3 lg:col-span-3 md:my-0 my-10 lg:mr-10 lg:pr-6">
        <ProjectsContainer />
        <h1 className="text-center text-white font-semibold py-5 text-xl">Tools and services Im currently skilled in and work with:</h1>
        <Tools />
      </div>
    </section>
  );
};

export default Content;
