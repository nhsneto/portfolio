"use client";
import { Github, Linkedin } from "@/app/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { montserrat } from "@/app/fonts";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const currentPathname = usePathname();
  const isHomePage = currentPathname === "/";
  const isSkillsPage = currentPathname === "/skills";
  const isProjectsPage = currentPathname === "/projects";

  return (
    <>
      <nav className={styles.container}>
        <Link href="https://linkedin.com/in/nhsneto" target="_blank">
          <Linkedin width="24" height="24" color="var(--gray)" />
        </Link>
        <Link href="https://github.com/nhsneto" target="_blank">
          <Github width="27" height="27" color="var(--gray)" />
        </Link>
      </nav>

      <nav className={`${styles.container} ${styles.desktop} ${montserrat.className}`}>
        <div className={styles.textLinks}>
          <Link href="/" className={isHomePage ? styles.currentPage : ""}>
            Home
          </Link>
          <Link href="/skills" className={isSkillsPage ? styles.currentPage : ""}>
            Skills
          </Link>
          <Link href="/projects" className={isProjectsPage ? styles.currentPage : ""}>
            Projects
          </Link>
        </div>
        <Link href="https://linkedin.com/in/nhsneto" target="_blank">
          <Linkedin width="24" height="24" color="var(--gray)" />
        </Link>
        <Link href="https://github.com/nhsneto" target="_blank">
          <Github width="27" height="27" color="var(--gray)" />
        </Link>
      </nav>
    </>
  );
}
