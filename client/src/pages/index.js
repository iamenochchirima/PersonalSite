import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import styles from "../styles/styles";
import toolgb from "../../public/toolbg.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-primary font-poppins w-full overflow-hidden text-dimWhite">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navigation />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          <Tools />
          <CTA/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

// <div className="bg-center bg-cover h-48 sm:h-64 lg:h-96" style={{ backgroundImage: `url(${toolgb.src})`}}>

// </div>

// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-200">
//   Item 1
// </div>
// </div>
