import styles from "./LevelBar.module.css";

export enum Level {
  Basic,
  Intermediate,
  Advanced,
}

type Props = {
  level: Level;
  width: string;
  height: string;
  color: string;
};

export default function LevelBar({ width, height, color, level }: Props) {
  const basic = level == 0 || level == 1 || level == 2;
  const intermediate = level == 1 || level == 2;
  const advanced = level == 2;

  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <div className={styles.bar} style={basic ? { backgroundColor: color } : {}}></div>
      <div className={styles.bar} style={intermediate ? { backgroundColor: color } : {}}></div>
      <div className={styles.bar} style={advanced ? { backgroundColor: color } : {}}></div>
    </div>
  );
}
