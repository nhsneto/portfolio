import { Github, Linkedin } from "@/app/components/icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.socialsContainer}>
      <a href="https://linkedin.com/in/nhsneto" target="_blank">
        <Linkedin width="24" height="24" fill="rgba(0, 0, 0, 0.6)" />
      </a>
      <a href="https://github.com/nhsneto" target="_blank">
        <Github width="27" height="27" fill="rgba(0, 0, 0, 0.6)" />
      </a>
    </nav>
  );
}
