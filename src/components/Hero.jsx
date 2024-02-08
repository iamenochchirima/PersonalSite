import React from "react";
import styles from "../styles/styles";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri"

const Hero = () => {
  return (
    <div className=" mt-[80px] xl:px-0 sm:px-16 px-6 sm:align-middle">
      <div className="pt-5 relative z-10">
        <h1 className="font-semibold text-dimWhite">
          SOFTWARE ENGINEER | WEB2 | WEB3
        </h1>
        <p className="py-5 text-5xl font-sans font-bold text-white">
          Welcome! I&apos;m Enoch Chirima.
        </p>
        <p className={`${styles.paragraph} text-start mt-2 text-lg leading-6`}>
          I&apos;m a
          <span className="ml-1 font-medium text-white">
            Full-stack and blockchain software engineer
          </span>{" "}
          solving real-world problems with code using cutting edge technologies.
          My goal is to deliver user-friendly and innovative solutions that make a difference.
        </p>

        <h1 className="text-white text-xl mt-5 font-medium">Lets Connect</h1>
        <div className=" text-4xl text-white flex py-5 space-x-4">
          <a
            href="https://www.linkedin.com/in/iamenochchirima/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/iamenochchirima"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/iamenochchirima"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://wa.me/+263774266830/"
            target="_blank"
            rel="noreferrer"
          >
            <RiWhatsappFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
