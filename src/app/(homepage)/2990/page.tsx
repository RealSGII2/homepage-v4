import type { Metadata } from "next";
import styles from "./page.module.scss";
import Password from "@/app/(homepage)/2990/client";

export const metadata: Metadata = {
  title: "2990",
};

export default function BlogHome() {
  return (
    <div style={{ paddingTop: 16 }}>
      <span className="nocopy" />

      <div className={styles.computer}>
        <Password />
      </div>
    </div>
  );
}
