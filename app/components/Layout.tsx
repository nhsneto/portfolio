import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import BottomNav from "@/app/components/BottomNav";
import styles from "./Layout.module.css";
import { montserrat } from "@/app/fonts";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <BottomNav />
      <footer className={`${styles.footer} ${montserrat.className}`}>
        &copy; nhsneto.github.io
      </footer>
    </div>
  );
}
