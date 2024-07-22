import { Github, Linkedin } from "@/app/icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.socialsContainer}>
      <a href="https://linkedin.com/in/nhsneto" target="_blank">
        <Linkedin width="24" height="24" color="var(--gray)" />
      </a>
      <a href="https://github.com/nhsneto" target="_blank">
        <Github width="27" height="27" color="var(--gray)" />
      </a>
    </nav>
  );
}
