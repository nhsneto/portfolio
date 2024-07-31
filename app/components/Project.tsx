import Link from "next/link";
import { libre_baskerville, montserrat } from "@/app/fonts";
import styles from "./Project.module.css";

type Props = {
  title: string;
  description: string;
  githubURL: string;
  screenshotsURL: string;
  tags?: string[];
};

export default function Project({
  title,
  description,
  githubURL,
  screenshotsURL,
  tags,
}: Props) {
  return (
    <article className={`${styles.container} ${montserrat.className}`}>
      <div className={styles.about}>
        <h2 className={libre_baskerville.className}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.linkList}>
        <Link href={screenshotsURL} target="_blank" className={styles.link}>
          Screenshots
        </Link>
        <Link href={githubURL} target="_blank" className={styles.link}>
          Code
        </Link>
      </div>

      <div className={styles.tagList}>
        {tags?.map((tag, i) => (
          <span key={i} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
