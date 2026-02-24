'use client';

import styles from "@/app/2990/page.module.scss";
import { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";

const Dot = () => <div className={styles.dot} />;
const ErrorDot = () => <div className={styles.dot + " " + styles.error} />;
const Empty = () => <div className={styles.blank} />;

const correct = "soma"

export default function Password() {
  const [guesses, setGuesses] = useState<string[]>(['']);
  const errorSound = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const listener = ({ key, ctrlKey, shiftKey, altKey, metaKey }: KeyboardEvent) => {
      if (ctrlKey || shiftKey || altKey || metaKey) return;

      if (key.length == 1) {
        const newGuesses = [...guesses.slice(0, -1), guesses[guesses.length - 1] + key.toLowerCase()].map(x => x.slice(0, 4))

        if (newGuesses[newGuesses.length - 1] == correct) {
          setGuesses(newGuesses);
          redirect('/173810246561409611302048');
        }

        if (guesses[guesses.length - 1].length == 3) {
          setGuesses([...newGuesses, ''].slice(-5));
          errorSound.current?.play();
        }
        else setGuesses(newGuesses);
      }
    }

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [guesses]);

  return (
    <>
      <audio src="/error.mp3" ref={errorSound} />

      {guesses.map((x, i) => (
        <div className={[styles.fakeField, i == guesses.length - 2 && styles.last].filter(x => x).join(' ')} key={x + i}>
          {x.split('').map((character, charI) => {
            if (i == guesses.length - 1) return <Dot key={charI} />

            if (character == correct[charI]) return <Dot key={charI} />
            return <ErrorDot key={charI} />
          })}

          {new Array(4 - x.length).fill(1).map((_, i) => <Empty key={i} />)}
        </div>
      ))}
    </>
  );
}
