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
              RealSGII2{" "}
              <a
                href="https://discord.gg/trucksim"
                target="_blank"
                rel="noreferrer"
                className={styles.guild}
              >
                <Image
                  width={20}
                  height={20}
                  src="/discord/guildBadge.png"
                  alt="Guild badge"
                />{" "}
                CLKR
              </a>
            </h1>
            <p className={styles.staticName}>@sgii2</p>
          </header>

          <Header />

          <div className={styles.tabRow}>
            <TabLink href={"/"}>About me</TabLink>
            <TabLink href={"/games"}>Games</TabLink>
            <TabLink href={"/trucks"}>Truck interest</TabLink>
            <TabLink href={"/blog"}>Blog</TabLink>
          </div>

          <div className={styles.mainContent}>{children}</div>

          <p className={styles.copyright}>
            <svg
              className={styles.lockup}
              width="112"
              height="29"
              viewBox="0 0 112 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5873 9.81928V17.6478L13.0001 22.0667L5.41296 17.6478V9.81928H7.56893V12.9809H18.4313V9.81928H20.5873Z"
                fill="currentcolor"
                opacity={0.64}
              />
              <path
                d="M2.16514 21.4287L10.8349 26.4762V29L0 22.6952V10.0857L2.16514 8.81924V21.4287Z"
                fill="currentcolor"
                opacity={0.64}
              />
              <path
                d="M21.6698 7.56202L13.0001 2.52376L4.33032 7.56202V5.04751L10.8349 1.25726L13.0001 1.04694e-05L15.1652 1.25726L21.6698 5.04751V7.56202Z"
                fill="currentcolor"
                opacity={0.64}
              />
              <path
                d="M26 10.0857V22.6952L15.1651 29V26.4762L23.8348 21.4287V8.81924L26 10.0857Z"
                fill="currentcolor"
                opacity={0.64}
              />
              <path
                d="M33 20.8924V8.08966H38.8154C41.4279 8.08966 42.7341 9.23425 42.7341 11.5234C42.7341 13.0715 41.7171 14.3536 39.6832 15.3697L43.7361 20.9103H40.7479L36.8561 15.3248V14.24C39.1226 13.8515 40.2558 12.9699 40.2558 11.5952C40.2558 10.6508 39.725 10.1786 38.6633 10.1786H35.4156V20.8924H33Z"
                fill="currentcolor"
              />
              <path
                d="M48.6032 11.4966C51.4542 11.4966 52.8797 12.9549 52.8797 15.8717C52.8797 16.2602 52.8529 16.6487 52.7992 17.0372H46.5633C46.5633 18.3641 47.5355 19.0276 49.48 19.0276C50.4283 19.0276 51.3767 18.9379 52.325 18.7586V20.6414C51.496 20.8207 50.488 20.9103 49.301 20.9103C45.8953 20.9103 44.1924 19.3055 44.1924 16.0959C44.1924 13.0297 45.6627 11.4966 48.6032 11.4966ZM46.5633 15.3876H50.5715V15.3159C50.5715 14.0129 49.9154 13.3614 48.6032 13.3614C47.3506 13.3614 46.6707 14.0368 46.5633 15.3876Z"
                fill="currentcolor"
              />
              <path
                d="M54.2128 17.9786C54.2128 16.1078 55.5727 15.1724 58.2925 15.1724C58.9307 15.1724 59.5689 15.2322 60.2071 15.3517V14.6434C60.2071 13.8007 59.6017 13.3793 58.3909 13.3793C57.365 13.3793 56.2258 13.5287 54.9733 13.8276V11.9448C56.2258 11.646 57.365 11.4966 58.3909 11.4966C61.1823 11.4966 62.578 12.5306 62.578 14.5986V20.9103H61.2002L60.3592 20.0676C59.5421 20.6294 58.6415 20.9103 57.6573 20.9103C55.361 20.9103 54.2128 19.9331 54.2128 17.9786ZM60.2071 16.9655C59.6107 16.846 58.9725 16.7862 58.2925 16.7862C57.1533 16.7862 56.5837 17.1747 56.5837 17.9517C56.5837 18.7885 57.0609 19.2069 58.0152 19.2069C58.8025 19.2069 59.5331 18.9618 60.2071 18.4717V16.9655Z"
                fill="currentcolor"
              />
              <path
                d="M67.1946 8.08966V20.9103H64.8237V8.08966H67.1946Z"
                fill="currentcolor"
              />
              <path
                d="M69.4402 20.3724V18.2207C70.7226 18.6989 72.172 18.9379 73.7883 18.9379C75.7507 18.9379 76.7318 18.2805 76.7318 16.9655C76.7318 16.0092 76.1294 15.531 74.9246 15.531H72.9205C70.3021 15.531 68.9929 14.3356 68.9929 11.9448C68.9929 9.31494 70.8568 8 74.5846 8C76.0161 8 77.373 8.2092 78.6554 8.62759V10.7793C77.373 10.3011 76.0161 10.0621 74.5846 10.0621C72.4374 10.0621 71.3638 10.6897 71.3638 11.9448C71.3638 12.9011 71.8827 13.3793 72.9205 13.3793H74.9246C77.71 13.3793 79.1027 14.5747 79.1027 16.9655C79.1027 19.6552 77.3313 21 73.7883 21C72.172 21 70.7226 20.7908 69.4402 20.3724Z"
                fill="currentcolor"
              />
              <path
                d="M91.3151 20.3186C90.2832 20.7729 88.9919 21 87.4411 21C82.926 21 80.6684 18.7736 80.6684 14.3207C80.6684 10.1069 82.9647 8 87.5574 8C88.9591 8 90.2116 8.2092 91.3151 8.62759V10.7793C90.2116 10.3011 89.0187 10.0621 87.7364 10.0621C84.6646 10.0621 83.1288 11.4816 83.1288 14.3207C83.1288 17.3989 84.5781 18.9379 87.4769 18.9379C87.9063 18.9379 88.3954 18.8662 88.9442 18.7228V14.9931H91.3151V20.3186Z"
                fill="currentcolor"
              />
              <path
                d="M95.9227 8.08966V20.9103H93.5518V8.08966H95.9227Z"
                fill="currentcolor"
              />
              <path
                d="M100.987 8.08966V20.9103H98.6156V8.08966H100.987Z"
                fill="currentcolor"
              />
              <path
                d="M103.232 20.9103V19.1172C107.497 16.1467 109.629 13.6961 109.629 11.7655C109.629 10.6299 108.854 10.0621 107.303 10.0621C105.991 10.0621 104.753 10.3908 103.59 11.0483V8.89655C104.753 8.29885 105.991 8 107.303 8C110.434 8 112 9.25517 112 11.7655C112 13.977 110.291 16.3379 106.874 18.8483H112V20.9103H103.232Z"
                fill="currentcolor"
              />
            </svg>
            &copy; {new Date().getFullYear()} <span className={styles.bullet}>&bull;</span> Built with my own keyboard.{" "}
            <ClickMe />
          </p>
        </div>
      </body>
    </html>
  );
}
