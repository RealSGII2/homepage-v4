import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [new URL("https://www.kiiyoko.dev/button.png")],
  },
};

const withMDX = createMDX({})
export default withMDX(nextConfig)
