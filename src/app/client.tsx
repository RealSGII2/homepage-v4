'use client';

import styles from "@/app/page.module.scss";
import  { type ReactNode, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const isActive = useMemo(() => (pathname.startsWith(href) && href !== '/') || pathname == href, [pathname, href]);
  return <Link href={href} className={isActive ? styles.active : undefined}>{children}</Link>;
}
