import { FolderOpen, Home, Handyman } from "@/app/icons";
import Link from "next/link";
import { montserrat } from "@/app/fonts";
import BottomNavItem from "@/app/components/BottomNavItem";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <Link href="/">
        <BottomNavItem
          icon={Home}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Home"
          isActive={true}
        />
      </Link>

      <Link href="/skills">
        <BottomNavItem
          icon={Handyman}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Skills"
          isActive={false}
        />
      </Link>

      <Link href="/projects">
        <BottomNavItem
          icon={FolderOpen}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Projects"
          isActive={false}
        />
      </Link>
    </div>
  );
}
