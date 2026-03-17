import type { MDXComponents } from "mdx/types";
import BlogComponents from '@/app/(homepage)/blog/components';

export function useMDXComponents(): MDXComponents {
  return BlogComponents;
}
