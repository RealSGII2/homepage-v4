import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogHome() {
  return (
    <div
      style={{
        padding: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <span className='nocopy' />

      <svg
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1C16.3137 1 19 3.68629 19 7V15C19 17.2091 17.2091 19 15 19H6C4.89543 19 4 18.1046 4 17C4 15.8954 4.89543 15 6 15C6.55228 15 7 14.5523 7 14V7C7 3.68629 9.68629 1 13 1ZM14 4.5C13.7239 4.5 13.5 4.72386 13.5 5V7C13.5 7.27614 13.7239 7.5 14 7.5C14.2761 7.5 14.5 7.27614 14.5 7V5C14.5 4.72386 14.2761 4.5 14 4.5ZM16 4.5C15.7239 4.5 15.5 4.72386 15.5 5V7C15.5 7.27614 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.27614 16.5 7V5C16.5 4.72386 16.2761 4.5 16 4.5Z"
          fill="white"
        />
        <ellipse
          opacity="0.5"
          cx="11.5"
          cy="21.5"
          rx="9.5"
          ry="1.5"
          fill="white"
        />
      </svg>

      <p>No blog posts yet!</p>
    </div>
  );
}
