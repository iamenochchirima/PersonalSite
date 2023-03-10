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
          <p
            className={`${styles.paragraph} md:text-justify mt-2 leading-6`}
          >
            My name is Enoch Chirima, and Im a 
            <span className="ml-1 font-medium text-white">Full-stack software developer</span> with a passion for creating websites
            and web applications that solve real-world problems. With expertise
            in both front-end and back-end development, I bring a well-rounded
            skill set to every project. If you are looking for a freelance
            developer or seeking to hire a full-time team member, Id love to
            chat with you about how I can contribute to your next project.
            Please feel free to connect with me through the links below, and
            lets work together to build something great!
          </p>

          <div className=" text-5xl flex justify-center py-10 space-x-4">
            <a href="https://api.whatsapp.com/send?phone=+263774266830">
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
        <h1 className="text-center text-white font-semibold py-5 px-5 text-xl">
          Tools and services I am currently skilled in and working with:
        </h1>
        <Tools />
      </div>
    </section>
  );
};

export default Content;
