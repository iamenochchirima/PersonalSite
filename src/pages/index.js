
import styles from "../styles/styles";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import ContactForm from "@/components/ContactForm";
import { useRef } from "react";

const Home = ({ title }) => {

  const hero = useRef(null)
  const projects = useRef(null)
  const tools = useRef(null)
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
      <Navbar {...{scrollToSection, projects, tools, contact}} />
      <div className="bg-black font-poppins w-full overflow-hidden text-dimWhite">
        <div className={`bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} sm:py- py-1`}>
              <Hero />
              <div ref={projects} className="projects">
              <Projects />
              </div>
              <div ref={tools} className="tools">
              <Tools />
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
