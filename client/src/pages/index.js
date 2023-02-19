import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Content from "@/components/Content";
import styles from "../styles/styles";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-primary font-poppins w-full overflow-hidden text-dimWhite">
          <Navigation />
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Content />
        </div>
      </div>
    </div>
  );
}
