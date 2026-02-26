"use client";

import styles from "@/app/(homepage)/2990/page.module.scss";
import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";

const Dot = () => <div className={styles.dot} />;
const MysteryDot = () => (
  <div className={styles.incorrect}>
    <svg
      viewBox="0 0 4 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 7H2V6H3V7Z" fill="currentcolor" />
      <path d="M3 5H2V3H3V5Z" fill="currentcolor" />
      <path d="M4 3H3V1H4V3Z" fill="currentcolor" />
      <path d="M1 2H0V1H1V2Z" fill="currentcolor" />
      <path d="M3 1H1V0H3V1Z" fill="currentcolor" />
    </svg>
  </div>
);
const ErrorDot = () => <div className={styles.dot + " " + styles.error} />;
const Empty = () => <div className={styles.blank} />;

const correct = "impactevent";

export default function Password() {
  const [guesses, setGuesses] = useState<string[]>([""]);
  const errorSound = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const listener = ({
      key,
      ctrlKey,
      shiftKey,
      altKey,
      metaKey,
    }: KeyboardEvent) => {
      if (ctrlKey || shiftKey || altKey || metaKey) return;

      if (key.trim().length == 1) {
        const newGuesses = [
          ...guesses.slice(0, -1),
          guesses[guesses.length - 1] + key.toLowerCase(),
        ].map((x) => x.slice(0, correct.length));

        if (newGuesses[newGuesses.length - 1] == correct) {
          setGuesses(newGuesses);
          redirect("/173810246561409611302048");
        }

        if (guesses[guesses.length - 1].length == correct.length - 1) {
          setGuesses([...newGuesses, ""].slice(-8));
          errorSound.current?.play();
        } else setGuesses(newGuesses);
      }
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [guesses]);

  return (
    <>
      <audio src="/error.mp3" ref={errorSound} />

      {guesses.map((x, i) => (
        <div
          className={[styles.fakeField, i == guesses.length - 2 && styles.last]
            .filter((x) => x)
            .join(" ")}
          key={x + i}
        >
          {x.split("").map((character, charI) => {
            if (i == guesses.length - 1) return <Dot key={charI} />;

            if (character == correct[charI]) return <Dot key={charI} />;
            if (correct.indexOf(character) != -1) return <MysteryDot key={charI} />
            return <ErrorDot key={charI} />;
          })}

          {new Array(correct.length - x.length).fill(1).map((_, i) => (
            <Empty key={i} />
          ))}
        </div>
      ))}
    </>
  );
}
