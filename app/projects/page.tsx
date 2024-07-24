import Layout from "@/app/components/Layout";
import Project from "@/app/components/Project";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>

        <section className={styles.projectList}>
          <Project
            title="Junta-Panelas"
            description="Web app that helps people to plan their junta-panelas parties (those parties that each guest bring a food/drink."
            githubURL="https://github.com/nhsneto/junta-panelas/"
            screenshotsURL="https://drive.google.com/drive/folders/1-jq7UF-ZtDCdiH4yjYX8IwsMHVTzt3xE"
            tags={["PHP", "Laravel", "Tailwind", "MongoDB", "SQLite", "Blade", "HTML", "CSS", "JQuery", "Pest"]}
          />
        </section>
      </div>
    </Layout>
  );
}
