import styles from "./SkillItem.module.css";
import LevelBar, { Level } from "@/app/components/LevelBar";

type Props = {
  text: string;
  level: Level;
};

export default function SkillItem({ text, level }: Props) {
  return (
    <li className={styles.container}>
      <span className={styles.text}>{text}</span>
      <span className={styles.dots}>
        · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
        · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
      </span>
      <div className={styles.mobile}>
        <LevelBar width="5rem" height="0.5rem" color="var(--gray)" level={level} />
      </div>
      <div className={styles.desktop}>
        <LevelBar width="6rem" height="0.7rem" color="var(--gray)" level={level} />
      </div>
    </li>
  );
}
