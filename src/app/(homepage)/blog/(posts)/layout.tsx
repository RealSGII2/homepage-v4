import type { ReactNode } from "react";
import Link from "next/link";
import styles from "../blog.module.scss";

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Link className={styles.backLink} href={"/blog"}>
        <svg
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

        Back to all posts
      </Link>

      <article className={styles.article}>
        {children}
      </article>
    </>
  );
}
