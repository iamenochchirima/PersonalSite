import Content from "@/components/Content";
import styles from "../styles/styles";
import Layout from "@/components/Layout";


export default function Home() {
  return (
    <Layout>
    <div className="bg-black font-poppins w-full overflow-hidden text-dimWhite">
      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Content />
        </div>
      </div>
    </div>
    </Layout>
  );
}
