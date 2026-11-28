import resolveColour, { type ResolveableColour } from "@/utils/resolveColur";
import type { ReactNode } from "react";

export type ThemeProps = {
    colour: ResolveableColour | 'inherit';
    children: ReactNode;
}

export default function Theme({ colour, children }: ThemeProps) {
    // @ts-expect-error Component specific variable
    return <div style={{ '--colour': resolveColour(colour) }}>{children}</div>
}
