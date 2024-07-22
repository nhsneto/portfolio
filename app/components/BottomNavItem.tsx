import type { ComponentType } from "react";
import { IconProps } from "@/app/icons";
import styles from "./BottomNavItem.module.css";

type Props = {
  icon: ComponentType<IconProps>;
  iconWidth: string;
  iconHeight: string;
  iconColor?: string;
  label: string;
  isActive: boolean;
};

export default function BottomNavItem(props: Props) {
  return (
    <div className={styles.container}>
      <div className={props.isActive ? styles.iconContainerActive : styles.iconContainer}>
        <props.icon
          width={props.iconWidth}
          height={props.iconHeight}
          color={props.iconColor}
        />
      </div>
      <span className={props.isActive ? styles.labelActive : styles.label}>{props.label}</span>
    </div>
  );
}
