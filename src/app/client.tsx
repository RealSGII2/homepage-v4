"use client";

import styles from "@/app/page.module.scss";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = {
  '/blog': 'Blog',
  '/trucks': 'Truck interest',
  '/': 'About me'
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
      setIsTop(document.body.scrollTop >= (headerRef.current?.offsetTop ?? 0) - 1);
    }

    document.body.addEventListener("scroll", listener);
    return () => document.body.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    if (menuOpen)
      document.body.classList.add(styles.mobileMenuOpen);
    else document.body.classList.remove(styles.mobileMenuOpen);
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <div
      ref={headerRef}
      className={[styles.header, isTop && styles.isTop, pathname == '/' && !menuOpen && !isTop && styles.special]
        .filter((x) => x)
        .join(" ")}
    >
      <h1>
        {menuOpen ? "Menu" : (paths[pathname as keyof typeof paths] ?? "")}
      </h1>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        {!menuOpen &&
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
        }
        {menuOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
}
