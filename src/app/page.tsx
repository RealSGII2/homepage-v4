import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import servers from './servers.json'

export default async function Home({ searchParams }: { searchParams: Promise<{ s: string; }> }) {
  const { s: serverId } = await searchParams;
  const server = serverId ? servers[serverId as keyof typeof servers] : null;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.notice}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9223 2C14.5065 2 14.9965 2.20259 15.3922 2.60777C15.7974 3.01296 16 3.50294 16 4.07774C16 4.65253 15.7974 5.14252 15.3922 5.5477C14.987 5.95289 14.4971 6.15548 13.9223 6.15548C13.3569 6.15548 12.8716 5.95289 12.4664 5.5477C12.0612 5.14252 11.8587 4.65253 11.8587 4.07774C11.8587 3.50294 12.0565 3.01296 12.4523 2.60777C12.8575 2.20259 13.3475 2 13.9223 2ZM14.7986 8.50177L11.9011 18.5512C11.7409 19.126 11.6608 19.5029 11.6608 19.682C11.6608 19.7856 11.7032 19.8846 11.788 19.9788C11.8728 20.0636 11.9623 20.106 12.0565 20.106C12.2167 20.106 12.3769 20.0353 12.5371 19.894C12.9611 19.5453 13.47 18.914 14.0636 18L14.5442 18.2827C13.1213 20.7609 11.609 22 10.0071 22C9.39458 22 8.90459 21.8304 8.5371 21.4912C8.17903 21.1425 8 20.7044 8 20.1767C8 19.828 8.08009 19.3852 8.24028 18.8481L10.2049 12.0919C10.3934 11.4417 10.4876 10.9517 10.4876 10.6219C10.4876 10.4146 10.3981 10.2309 10.2191 10.0707C10.04 9.91048 9.79505 9.83039 9.4841 9.83039C9.34276 9.83039 9.17314 9.8351 8.97527 9.84452L9.15901 9.27915L13.9505 8.50177H14.7986Z"
              fill="#4C93FC"
            />
          </svg>

          <div>
            <p>
              I&apos;ve officially swapped careers to be a truck driver.{" "}
              <Link href={"/trucks"}>
                Read my story{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L14 7M19 12L14 17"
                    stroke="#4C93FC"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Link>
            </p>

            {!!server && <>
              <div />

              <p>This page showcases specific information for <b>{server.name}</b>.</p>
            </>}
          </div>
        </div>

        <p>{server?.body ?? 'Future truck driver and hobbyist web developer.'}</p>

        <h2>Interests</h2>
        <div className={styles.itemGrid}>
          <div className={styles.large}>
            <p>Semi trucks</p>

            <Image
              fill
              src="/interests/semitrucks.jpg"
              alt="An orange truck on a parking lot"
              className={styles.bgImage}
            />
          </div>
          <div>
            <Image
              width={56}
              height={56}
              src="/interests/tripod.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.thumbnail}
            />{" "}
            <Image
              width={256}
              height={256}
              src="/interests/tripod.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.bgImage}
            />
            <p>War of the Worlds</p>
          </div>
          <div className={styles.tankblur}>
            <Image
              width={56}
              height={56}
              src="/interests/t90a.jpg"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.thumbnail}
            />{" "}
            <Image
              width={256}
              height={256}
              src="/interests/t90a.jpg"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.bgImage}
            />
            <p>Tanks</p>
          </div>
          <div className={styles.superblur}>
            <Image
              width={56}
              height={56}
              src="/interests/maths.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.thumbnail}
            />{" "}
            <Image
              width={256}
              height={256}
              src="/interests/maths.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.bgImage}
            />
            <p>Mathematics</p>
          </div>
          <div className={styles.large2}>
            <p>Web development</p>

            <Image
              fill
              src="/interests/citizenband.png"
              alt="An orange truck on a parking lot"
              className={styles.bgImage}
            />
          </div>
          <div className={styles.superblur}>
            <Image
              width={56}
              height={56}
              src="/interests/svenska.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.thumbnail}
            />{" "}
            <Image
              width={256}
              height={256}
              src="/interests/svenska.png"
              alt="A miniature tripod model from the 2005 War of the Worlds movie"
              className={styles.bgImage}
            />
            <p>Linguistics</p>
          </div>
        </div>
        <h2>Socials</h2>
        <div className={styles.connectionGrid}>
          <a
            href="https://github.com/RealSGII2"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <svg
                width="20"
                viewBox="0 0 1024 1024"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
            RealSGII2
            <svg
              className={styles.external}
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="https://steamcommunity.com/id/realsgii2"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 65"
                fill="#fff"
              >
                <g>
                  <path
                    d="M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32s-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328z"
                    fill="url(#A)"
                  ></path>
                  <path d="M30.31 23.985l.003.158-7.83 11.375c-1.268-.058-2.54.165-3.748.662a8.14 8.14 0 0 0-1.498.8L.042 29.893s-.398 6.546 1.26 11.424l12.156 5.016c.6 2.728 2.48 5.12 5.242 6.27a8.88 8.88 0 0 0 11.603-4.782 8.89 8.89 0 0 0 .684-3.656L42.18 36.16l.275.005c6.705 0 12.155-5.466 12.155-12.18s-5.44-12.16-12.155-12.174c-6.702 0-12.155 5.46-12.155 12.174zm-1.88 23.05c-1.454 3.5-5.466 5.147-8.953 3.694a6.84 6.84 0 0 1-3.524-3.362l3.957 1.64a5.04 5.04 0 0 0 6.591-2.719 5.05 5.05 0 0 0-2.715-6.601l-4.1-1.695c1.578-.6 3.372-.62 5.05.077 1.7.703 3 2.027 3.696 3.72s.692 3.56-.01 5.246M42.466 32.1a8.12 8.12 0 0 1-8.098-8.113 8.12 8.12 0 0 1 8.098-8.111 8.12 8.12 0 0 1 8.1 8.111 8.12 8.12 0 0 1-8.1 8.113m-6.068-8.126a6.09 6.09 0 0 1 6.08-6.095c3.355 0 6.084 2.73 6.084 6.095a6.09 6.09 0 0 1-6.084 6.093 6.09 6.09 0 0 1-6.081-6.093z"></path>
                </g>
                <defs>
                  <linearGradient id="A" x2="50%" x1="50%" y2="100%" y1="0%">
                    <stop stop-color="#111d2e" offset="0%"></stop>
                    <stop stop-color="#051839" offset="21.2%"></stop>
                    <stop stop-color="#0a1b48" offset="40.7%"></stop>
                    <stop stop-color="#132e62" offset="58.1%"></stop>
                    <stop stop-color="#144b7e" offset="73.8%"></stop>
                    <stop stop-color="#136497" offset="87.3%"></stop>
                    <stop stop-color="#1387b8" offset="100%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            RealSGII2
            <svg
              className={styles.external}
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="https://roblox.com/users/127043346/profile"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <svg
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60.8 60.8"
              >
                <path
                  fill="white"
                  d="M14.87 3.525 57.27 14.875 45.93 57.275 3.53 45.925M34.73 37.995 37.9 26.165 26.07 22.995 22.89 34.825"
                />
              </svg>
            </div>
            SGII2
            <svg
              className={styles.external}
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="https://www.reddit.com/user/SGII2/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
              >
                <defs>
                  <style>
                    {`.cls-1 {fill: #fff;}

                    .cls-1, .cls-2 {stroke - width: 0px;}

                    .cls-2 {fill: #ff4500;}`}
                  </style>
                </defs>
                <path
                  className="cls-2"
                  d="m128,0h0C57.31,0,0,57.31,0,128h0c0,35.35,14.33,67.35,37.49,90.51l-24.38,24.38c-4.84,4.84-1.41,13.11,5.43,13.11h109.46s0,0,0,0c70.69,0,128-57.31,128-128h0C256,57.31,198.69,0,128,0Z"
                ></path>
                <path
                  className="cls-1"
                  d="m154.04,60.36c2.22,9.41,10.67,16.42,20.76,16.42,11.78,0,21.33-9.55,21.33-21.33s-9.55-21.33-21.33-21.33c-10.3,0-18.89,7.3-20.89,17.01-17.25,1.85-30.72,16.48-30.72,34.21,0,.04,0,.07,0,.11-18.76.79-35.89,6.13-49.49,14.56-5.05-3.91-11.39-6.24-18.27-6.24-16.51,0-29.89,13.38-29.89,29.89,0,11.98,7.04,22.3,17.21,27.07.99,34.7,38.8,62.61,85.31,62.61s84.37-27.94,85.31-62.67c10.09-4.8,17.07-15.09,17.07-27,0-16.51-13.38-29.89-29.89-29.89-6.85,0-13.16,2.31-18.2,6.19-13.72-8.49-31.04-13.83-49.99-14.54,0-.03,0-.05,0-.08,0-12.7,9.44-23.24,21.68-24.97Zm-81.54,82.27c.5-10.84,7.7-19.16,16.07-19.16s14.77,8.79,14.27,19.63c-.5,10.84-6.75,14.78-15.13,14.78s-15.71-4.41-15.21-15.25Zm95.06-19.16c8.38,0,15.58,8.32,16.07,19.16.5,10.84-6.84,15.25-15.21,15.25s-14.63-3.93-15.13-14.78c-.5-10.84,5.89-19.63,14.27-19.63Zm-9.96,44.24c1.57.16,2.57,1.79,1.96,3.25-5.15,12.31-17.31,20.96-31.5,20.96s-26.34-8.65-31.5-20.96c-.61-1.46.39-3.09,1.96-3.25,9.2-.93,19.15-1.44,29.54-1.44s20.33.51,29.54,1.44Z"
                ></path>
              </svg>
            </div>
            SGII2
            <svg
              className={styles.external}
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"
                className=""
              ></path>
            </svg>
          </a>
          <a
            href="https://open.spotify.com/user/khdgsqwgb1x2rz9i2wuy561hw"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <svg
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="#1ed760"
                  d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
                />
                <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
              </svg>
            </div>
            RealSGII2
            <svg
              className={styles.external}
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.7 3.3a1 1 0 0 0-1.4 0l-5 5a1 1 0 0 0 1.4 1.4L11 6.42V20a1 1 0 1 0 2 0V6.41l3.3 3.3a1 1 0 0 0 1.4-1.42l-5-5Z"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}
