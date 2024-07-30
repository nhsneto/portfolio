import { Github, Linkedin } from "@/app/icons";
import Link from "next/link";
import { montserrat } from "@/app/fonts";
import styles from "./Navbar.module.css";

export default function Navbar() {
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
        <Link href="/">Home</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
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
