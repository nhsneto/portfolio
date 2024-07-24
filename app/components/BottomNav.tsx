"use client";

import {
  Home,
  HomeFilled,
  Handyman,
  HandymanFilled,
  FolderOpen,
  FolderOpenFilled,
} from "@/app/icons";
import Link from "next/link";
import { montserrat } from "@/app/fonts";
import BottomNavItem from "@/app/components/BottomNavItem";
import { usePathname } from "next/navigation";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const currentPathname = usePathname();
  const isHomePage = currentPathname === "/";
  const isSkillsPage = currentPathname === "/skills";
  const isProjectsPage = currentPathname === "/projects";

  return (
    <div className={styles.bottomNav}>
      <div className={`${styles.container} ${montserrat.className}`}>
        <Link href="/">
          <BottomNavItem
            icon={isHomePage ? HomeFilled : Home}
            iconWidth="24px"
            iconHeight="24px"
            iconColor="var(--gray)"
            label="Home"
            isActive={isHomePage}
          />
        </Link>

        <Link href="/skills">
          <BottomNavItem
            icon={isSkillsPage ? HandymanFilled : Handyman}
            iconWidth="24px"
            iconHeight="24px"
            iconColor="var(--gray)"
            label="Skills"
            isActive={isSkillsPage}
          />
        </Link>

        <Link href="/projects">
          <BottomNavItem
            icon={isProjectsPage ? FolderOpenFilled : FolderOpen}
            iconWidth="24px"
            iconHeight="24px"
            iconColor="var(--gray)"
            label="Projects"
            isActive={isProjectsPage}
          />
        </Link>
      </div>
    </div>
  );
}
