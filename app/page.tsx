import Layout from "@/app/components/Layout";
import { montserrat } from "@/app/fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Nelson Neto</h1>
          <p className={`${styles.subtitle} ${montserrat.className}`}>
            Software Developer
          </p>
          <p className={`${styles.about} ${montserrat.className}`}>
            Hi, I&apos;m a junior software developer based in Pernambuco
            (Brazil), and a software development student at <abbr>IFPE</abbr>{" "}
            (Instituto Federal de Pernambuco). I&apos;ve developed some projects
            using <em className={styles.em}>PHP,</em>{" "}
            <em className={styles.em}>Java</em> and{" "}
            <em className={styles.em}>JavaScript.</em>
          </p>
        </div>
      </div>
    </Layout>
  );
}
