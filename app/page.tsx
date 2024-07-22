import Layout from "@/app/components/Layout";
import { montserrat } from "@/app/fonts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Nelson Neto</h1>
        <p className={`${styles.subtitle} ${montserrat.className}`}>
          Software Developer
        </p>
        <p className={`${styles.about} ${montserrat.className}`}>
          Hi, I&apos;m a junior software developer based in Pernambuco (Brazil),
          and a software development student at <abbr>IFPE</abbr> (Instituto
          Federal de Pernambuco). I&apos;ve developed some projects using{" "}
          <em>PHP</em>, <em>Java</em> and <em>JavaScript</em>.
        </p>
      </div>
    </Layout>
  );
}
