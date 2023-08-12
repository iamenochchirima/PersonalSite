
import styles from "../styles/styles";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import { useRef } from "react";
import About from "@/components/About";

const Home = ({ title }) => {

  const hero = useRef(null)
  const projects = useRef(null)
  const skills = useRef(null)
  const about = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    console.log(elementRef)
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar {...{ scrollToSection, projects, skills, about, contact }} />
      <div className="bg-black font-poppins w-full overflow-hidden text-dimWhite">
        <div className={`bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} sm:py- py-1`}>
            <Hero />
            <div ref={projects} className="projects">
              <Projects />
            </div>
            <div ref={skills} className="skills">
              <Skills />
            </div>
            <div ref={about} className="about">
              <About />
            </div>
            <div ref={contact} className="contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.defaultProps = {
  title: "Enoch Chirima",
  content: "Enoch Chirima Portifolio Site",
};

export default Home;
