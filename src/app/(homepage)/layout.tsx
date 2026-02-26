import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import styles from "@/app/(homepage)/page.module.scss";
import Image from "next/image";
import TabLink, { ClickMe, Header } from "@/app/(homepage)/client";

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
          <p>inspecting is cheating. cheaters will not be tolerated</p>
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
              src="/share/avatar/anim/raw.webp"
              width={128}
              height={128}
              alt="RealSGII2's avatar"
              className={styles.avatar}
            />
            <div className={styles.thoughtBubble}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12.3926L18 22.7842H6L0 12.3926L6 2H18L24 12.3926ZM11.1553 15.8564L8.31055 20.7842H15.6367L12.8057 15.8564H11.1553ZM14.5576 14.8896L17.3955 19.8311L21.1133 13.3926H15.4229L14.5576 14.8896ZM6.57812 19.7832L9.42188 14.8555L8.57715 13.3926H2.8877L6.57812 19.7832ZM14.5771 9.92871L15.4229 11.3926H21.1133L17.4229 5L14.5771 9.92871ZM2.8877 11.3926H8.57715L9.41113 9.94629L6.57422 5.00684L2.8877 11.3926ZM11.1338 8.92871H12.8457L15.6904 4H8.30273L11.1338 8.92871Z"
                  fill="#E71825"
                />
              </svg>
              i might like droidekas
            </div>
            <h1 className={styles.username}>
              RealSGII2 <a href="https://discord.gg/trucksim" target="_blank" rel="noreferrer" className={styles.guild}>
                <Image width={20} height={20} src="/discord/guildBadge.png" alt="Guild badge" /> HAUL
              </a>
            </h1>
            <p className={styles.staticName}>@sgii2</p>
          </header>

          <Header />

          <div className={styles.tabRow}>
            <TabLink href={"/public"}>About me</TabLink>
            <TabLink href={"/games"}>Games</TabLink>
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
