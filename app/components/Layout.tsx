import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import BottomNav from "@/app/components/BottomNav";
import styles from "./Layout.module.css";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <BottomNav />
    </div>
  );
}
