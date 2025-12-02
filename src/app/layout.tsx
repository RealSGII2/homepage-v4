import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TabLink, { Header } from "@/app/client";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealSGII2",
  description:
    "Future truck driver and hobbyist web developer. My link-in-bio with information about me!",
  openGraph: {
    siteName: "RealSGII2",
  },
};

export const viewport: Viewport = {
  themeColor: "#4c94fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <header>
            <Image
              src="https://cdn.discordapp.com/avatars/258706134850863106/9fe99a31dd186042e1f2cfe7c8009506.png"
              width={128}
              height={128}
              alt="RealSGII2's avatar"
              className={styles.avatar}
            />
            <h1 className={styles.username}>
              RealSGII2 <span className={styles.guild}>GOOG</span>
            </h1>
            <p className={styles.staticName}>@sgii2</p>
          </header>

          <Header />

          <div className={styles.tabRow}>
            <TabLink href={"/"}>About me</TabLink>
            <TabLink href={"/trucks"}>Truck interest</TabLink>
            <TabLink href={"/blog"}>Blog</TabLink>
          </div>

          <div className={styles.mainContent}>
            {children}
          </div>

          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} RealSGII2. Built with my own
            keyboard.
          </p>
        </div>
      </body>
    </html>
  );
}
