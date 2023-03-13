import styles from "@/styles/styles";
import { useRef, useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import Projects from "./Projects";
import Tools from "./Tools";

const Content = () => {
  return (
    <section id="home" className={` ${styles.paddingY}`}>
      <Hero />
      <Projects />
      <Tools />
      <ContactForm />
    </section>
  );
};

export default Content;
