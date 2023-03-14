import React from "react";
import styles from "../styles/styles";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className=" xl:px-0 sm:px-16 px-6 sm:align-middle">
      <div className="pt-5 relative z-10">
        <h1 className="font-semibold text-dimWhite">
          SOFTWARE DEVELOPER | PYTHON | JAVASCRIPT
        </h1>
        <p className="py-5 text-5xl font-sans font-bold text-white">
          Welcome! Im Enoch Chirima.
        </p>
        <p className={`${styles.paragraph} text-start mt-2  leading-6`}>
          Im a
          <span className="ml-1 font-medium text-white">
            Full-stack software developer
          </span>{" "}
          with a passion for creating websites and web applications that solve
          real-world problems. With expertise in both front-end and back-end
          development, I bring a well-rounded skill set to every project.
        </p>{" "}
        <br />
        <p>
          {" "}
          If you are looking for a freelance developer or seeking to hire a
          full-time team member, Id love to chat with you about how I can
          contribute to your next projects. Please feel free to chat and connect
          with me through the links below, and lets work together to build
          something great!
        </p>
        <h1 className="text-white text-xl mt-5 font-medium">Lets Connect</h1>
        <div className=" text-4xl text-white flex py-5 space-x-4">
          <a href="https://www.linkedin.com/in/iamenochchirima/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/iamenochchirima">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/iamenochchirima">
            <AiFillTwitterCircle />
          </a>
          <a href="https://wa.me/+263774266830/">
            <RiWhatsappFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
