"use client";

import styles from "@/app/page.module.scss";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = {
  "/blog": "Blog",
  "/trucks": "Truck interest",
  "/": "About me",
};

function random(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function randomItem<T>(array: T[]): T {
  return array[random(0, array.length)];
}

export function ClickMe() {
  const ref = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isActive, setActive] = useState(false);
  const [jukeCounter, setJukeCounter] = useState(0);
  const [textInt, setTextInt] = useState<NodeJS.Timeout | null>(null);
  const [resetTimeout, setResetTimeout] = useState<NodeJS.Timeout | null>(null);
  const [clickRate, setClickRate] = useState([] as number[]);
  const [lastClickTime, setLastClickTime] = useState(() => Date.now());
  const [startTime, setStartTime] = useState(0);
  const [isTap, setIsTap] = useState(false);

  useEffect(() => {
    const onListener = () => {
      console.log(
        "[Anticheat.touchscreen] Tap detected, all clicks for next 100ms flagged",
      );
      setIsTap(true);
    };
    const offListener = () => setTimeout(setIsTap, 100, false);

    document.addEventListener("touchstart", onListener);
    document.addEventListener("touchend", offListener);

    return () => {
      document.removeEventListener("touchstart", onListener);
      document.removeEventListener("touchend", offListener);
    };
  }, []);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const setText = (text: string) => (current.innerText = text);

    switch (jukeCounter) {
      case 2:
        setText("Click me!!");
        break;
      case 3:
        setText("Click me!!!!!");
        break;
      case 4:
        setText("Can't catch me?");
        break;
      case 5:
        setText("Too slow!");
        break;
      case 6:
        if (textInt != null) break;
        setTextInt(
          setInterval(() => {
            setText(
              current.innerText +
                current.innerText.substring(current.innerText.length - 1),
            );

            if (
              current.innerText.split("").filter((x) => x == "!" || x == "?")
                .length > 5
            )
              setText(
                randomItem(
                  [
                    "Click me",
                    "Can't catch me",
                    "Too slow",
                    "Can't keep up",
                    "Running out of time",
                    "Hurry up",
                  ].filter((x) => x != current.innerText.replace(/[?!]/g, "")),
                ) + randomItem(["?", "!"]),
              );
          }, 250),
        );
        break;
    }
  }, [ref, jukeCounter, textInt]);

  const reset = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setJukeCounter(0);
    setActive(false);

    if (textInt) window.clearInterval(textInt);
    setTextInt(null);

    if (resetTimeout) window.clearTimeout(resetTimeout);
    setResetTimeout(null);

    if (ref.current) ref.current.innerText = "Click me?";

    setClickRate([]);
  }, [textInt, ref, resetTimeout]);

  const setPosition = useCallback(
    (x: number, y: number) => {
      const current = ref.current;
      if (!current) return;

      current.setAttribute(
        "style",
        !window.location.search.includes("cheat")
          ? [`--x: ${x}px`, `--y: ${y}px`].map((x) => x + ";").join(" ")
          : [`--x: 100px`, `--y: 100px`].map((x) => x + ";").join(" "),
      );
    },
    [ref],
  );

  const reposition = useCallback(
    (force = false) => {
      const width = window.visualViewport?.width ?? 100;
      const height = window.visualViewport?.height ?? 100;

      setTimeout(
        setPosition,
        !force
          ? Math.max(
              1,
              ((Date.now() - startTime) / 3000) *
                (1 + +(window.localStorage.getItem("gameLossCount") ?? "0")),
            )
          : 1,
        random(0, width - 300),
        random(92, height - 200),
      );
    },
    [setPosition, startTime],
  );

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const setPosition = (x: number, y: number) =>
      current.setAttribute(
        "style",
        !window.location.search.includes("cheat")
          ? [`--x: ${x}px`, `--y: ${y}px`].map((x) => x + ";").join(" ")
          : [`--x: 100px`, `--y: 100px`].map((x) => x + ";").join(" "),
      );

    const listener = () => {
      if (!isActive) {
        const rect = current.getBoundingClientRect();
        setPosition(rect.left, rect.top);
        setActive(true);
        requestAnimationFrame(reposition as () => void);
        audioRef.current?.play();
        setResetTimeout(
          setTimeout(() => {
            window.localStorage.setItem(
              "gameLossCount",
              (
                +(window.localStorage.getItem("gameLossCount") ?? "0") + 1
              ).toString(),
            );
            window.location.reload();
          }, 90 * 1000),
        );
        setLastClickTime(Date.now());
        setStartTime(Date.now());
        reposition(true);

        setInterval(() => {
          const rects = current.getBoundingClientRect();
          if (
            rects.x > document.body.clientWidth ||
            rects.y > document.body.clientHeight
          )
            reposition(true);
        }, 500);
      }

      reposition();

      setJukeCounter((x) => x + 1);
    };

    current.addEventListener("click", listener);
    current.addEventListener("mouseover", () => {
      if (isActive) listener();
    });
    document
      .querySelector("#gameControls button")
      ?.addEventListener("click", () => window.location.reload());

    return () => {
      current.removeEventListener("click", listener);
      current.addEventListener("mouseover", () => {
        if (isActive) listener();
      });
    };
  }, [ref, isActive, reset]);

  useEffect(() => {
    const documentClickListener = () => {
      if (isActive) {
        setClickRate([...clickRate, Date.now() - lastClickTime].slice(-50));
        setLastClickTime(Date.now());

        const avg =
          clickRate.reduce((a, b) => a + b, 0) / clickRate.length / 1000;

        console.log(
          "[Anticheat.autoClicker] Average click rate to date: " + avg + "s",
        );

        console.log(
          "[Anticheat.autoClicker] MAD click rate to date: " +
            clickRate.map((x) => Math.abs(x - avg)).reduce((a, b) => a + b, 0) /
              clickRate.length /
              1000 +
            "s",
        );
      }
    };

    document.addEventListener("click", documentClickListener);
    return () => document.removeEventListener("click", documentClickListener);
  });

  const onClick = useCallback(() => {
    if (!isActive || clickRate.length < 1) return;

    document.body.classList.add("gameTriggered");

    const avgClickRate =
      clickRate.reduce((a, b) => a + b, 0) / clickRate.length / 1000;
    const madClickRate =
      clickRate
        .map((x) => Math.abs(x - avgClickRate))
        .reduce((a, b) => a + b, 0) /
      clickRate.length /
      1000;

    if (isTap)
      (document.querySelector("#end p") as HTMLParagraphElement).innerText =
        "touch screens are used by cheaters. cheaters will not be tolerated";
    else if (avgClickRate < 0.125)
      (document.querySelector("#end p") as HTMLParagraphElement).innerText =
        "cheaters will not be tolerated";
    else
      (document.querySelector("#end p") as HTMLParagraphElement).innerText =
        "01101100 01101111 01100011 01100001 01110100 01101001 01101111 01101110 00101110 01101000 01110010 01100101 01100110 00100000 00111101 00100000 00110000 01100010 00110000 00110000 00110000 00110000 00110001 00110000 00110001 00110001 00110001 00110000 00110001 00110000 00110001 00110001 00110001 00110000";

    window.localStorage.setItem("gameLossCount", "0");

    reset();
    document.body.classList.add("gameCompleted");
    (document.querySelector("audio#shutdown") as HTMLAudioElement).play();
  }, [clickRate, isActive, isTap, reset]);

  return (
    <>
      <audio src={"/essence.mp3"} ref={audioRef} />

      {isActive && (
        <>
          Selections are disabled.{" "}
          {/*<button className={styles.endClickMe} onClick={reset}>*/}
          {/*  Quit game*/}
          {/*</button>*/}
          <br />
          <span className={styles.muted}>
            Soundtrack: &quot;The Essence of Machine&quot; by blinch for Please
            Don&apos;t Touch Anything.{" "}
          </span>
          <br />
          <br />
          Click the button to win.
          <br />
          The delay between hover and moving will increase as the game
          progresses.
          <br />
          The more times you lose, the more that delay increases (i.e. losing
          once will double the time, losing twice will triple the time).
        </>
      )}

      <button
        onClick={() => (isActive ? requestAnimationFrame(onClick) : 0)}
        tabIndex={-1}
        className={`${styles.clickMe} ${isActive ? styles.active : ""}`.trim()}
        ref={ref}
      >
        Click me{isActive ? "!" : "?"}
      </button>
    </>
  );
}

export default function TabLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = useMemo(
    () => (pathname.startsWith(href) && href !== "/") || pathname == href,
    [pathname, href],
  );
  return (
    <Link href={href} className={isActive ? styles.active : undefined}>
      {children}
    </Link>
  );
}

export function Header() {
  const [isTop, setIsTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const listener = () => {
      setIsTop(
        document.body.scrollTop >= (headerRef.current?.offsetTop ?? 0) - 1,
      );
    };

    document.body.addEventListener("scroll", listener);
    return () => document.body.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.classList.add(styles.mobileMenuOpen);
    else document.body.classList.remove(styles.mobileMenuOpen);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div
      ref={headerRef}
      className={[
        styles.header,
        isTop && styles.isTop,
        pathname == "/" && !menuOpen && !isTop && styles.special,
      ]
        .filter((x) => x)
        .join(" ")}
    >
      <h1>
        {menuOpen ? "Menu" : (paths[pathname as keyof typeof paths] ?? "")}
      </h1>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path
              fill="currentcolor"
              d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
            ></path>
          </svg>
        )}
        {menuOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
}
