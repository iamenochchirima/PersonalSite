import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Content";
import styles from "../styles/styles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-primary font-poppins w-full overflow-hidden text-dimWhite ">
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
    </div>
  );
}
