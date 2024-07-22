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
  const isHome = currentPathname === "/";
  const isSkills = currentPathname === "/skills";
  const isProjects = currentPathname === "/projects";

  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <Link href="/">
        <BottomNavItem
          icon={isHome ? HomeFilled : Home}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Home"
          isActive={isHome}
        />
      </Link>

      <Link href="/skills">
        <BottomNavItem
          icon={isSkills ? HandymanFilled : Handyman}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Skills"
          isActive={isSkills}
        />
      </Link>

      <Link href="/projects">
        <BottomNavItem
          icon={isProjects ? FolderOpenFilled : FolderOpen}
          iconWidth="24px"
          iconHeight="24px"
          iconColor="var(--gray)"
          label="Projects"
          isActive={isProjects}
        />
      </Link>
    </div>
  );
}
