import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import TabLink, { ClickMe, Header } from "@/app/client";

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
        <div id="end">
          <p>01100011 01101000 01100101 01100011 01101011 00100000 01100010 01100001 01100011 01101011 00100000 01101100 01100001 01110100 01100101 01110010</p>
        </div>
        <div id="flash" />
        <div id="gameControls">
          <button className="quitGame">Reload page</button>
          <audio id={"shutdown"} src={"/shutdown.mp3"} />

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            width={36}
          >
            <polygon
              fill="#FFFFFF"
              points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
            />
            <polygon
              fill="#FFFFFF"
              points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 "
            />
            <rect
              x="12.5"
              y="13.6"
              transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
              width="2"
              height="8"
            />
            <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
          </svg>
        </div>
        <div className={styles.page}>
          <header>
            <Image
              src="https://cdn.discordapp.com/avatars/258706134850863106/a_b0b270afff8907f049856d8f3a3108c9.gif"
              width={128}
              height={128}
              alt="RealSGII2's avatar"
              className={styles.avatar}
            />
            <div className={styles.thoughtBubble}>i might like droidekas</div>
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

          <div className={styles.mainContent}>{children}</div>

          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} RealSGII2. Built with my own
            keyboard. <ClickMe />
          </p>
        </div>
      </body>
    </html>
  );
}
