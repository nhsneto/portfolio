import Layout from "@/app/components/Layout";
import SkillItem from "@/app/components/SkillItem";
import { Level } from "@/app/components/LevelBar";
import { montserrat } from "@/app/fonts";
import styles from "./page.module.css";

export default function skillsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Skills</h1>

        <div className={styles.skillsList}>
          <section>
            <h2 className={styles.skillsHeading}>Frameworks/Libraries</h2>
            <ul className={`${montserrat.className} ${styles.skills}`}>
              <SkillItem text="Spring Boot" level={Level.Basic} />
              <SkillItem text="Laravel" level={Level.Basic} />
              <SkillItem text="Next.js" level={Level.Basic} />
              <SkillItem text="React" level={Level.Basic} />
              <SkillItem text="Tailwind CSS" level={Level.Intermediate} />
              <SkillItem text="JQuery" level={Level.Basic} />
            </ul>
          </section>

          <section>
            <h2 className={styles.skillsHeading}>Databases</h2>
            <ul className={`${montserrat.className} ${styles.skills}`}>
              <SkillItem text="SQLite" level={Level.Basic} />
              <SkillItem text="MySQL" level={Level.Basic} />
              <SkillItem text="MongoDB" level={Level.Basic} />
            </ul>
          </section>

          <section>
            <h2 className={styles.skillsHeading}>Languages</h2>
            <ul className={`${montserrat.className} ${styles.skills}`}>
              <SkillItem text="Java" level={Level.Intermediate} />
              <SkillItem text="PHP" level={Level.Intermediate} />
              <SkillItem text="JavaScript" level={Level.Intermediate} />
              <SkillItem text="TypeScript" level={Level.Intermediate} />
              <SkillItem text="XML" level={Level.Intermediate} />
              <SkillItem text="HTML" level={Level.Intermediate} />
              <SkillItem text="CSS" level={Level.Intermediate} />
            </ul>
          </section>

          <section>
            <h2 className={styles.skillsHeading}>Testing</h2>
            <ul className={`${montserrat.className} ${styles.skills}`}>
              <SkillItem text="JUnit" level={Level.Basic} />
              <SkillItem text="Pest PHP" level={Level.Basic} />
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
