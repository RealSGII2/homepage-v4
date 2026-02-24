import type { Metadata } from "next";
import styles from "./page.module.scss";
import Password from "@/app/2990/client";

export const metadata: Metadata = {
  title: "2990",
};

export default function BlogHome() {
  return (
    <div style={{ paddingTop: 16 }}>
      <span className="nocopy" />

      <div className={styles.computer}>
        <iframe style={{ display: 'block' }} src={"//pathos.realsgii2.dev"} width="100%" height="100%" frameBorder={0} />
      </div>

      <p style={{ margin: 0 }}>(tbd)</p>
    </div>
  );
}
