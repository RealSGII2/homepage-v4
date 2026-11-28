import resolveColour, { type ResolveableColour } from "@/utils/resolveColur";
import type { ReactNode } from "react";

export type ThemeProps = {
    colour: ResolveableColour | 'inherit';
    children: ReactNode;
}

export default function Theme({ colour, children }: ThemeProps) {
    return <div style={{ '--colour': resolveColour(colour) }}>{children}</div>
}
