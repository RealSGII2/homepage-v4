import type { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./style.module.scss";
import cx from "@/utils/cx";
import resolveColour from "@/utils/resolveColur";

export type ButtonProps = {
    variant: "filled" | "outlined" | "ghost" | "text";
    colour?: "blue.bg" | "blue.fg" | "green.bg" | "green.fg" | "red.bg" | "red.fg" | "inherit" | string;
    size?: "small" | "default";
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type StaticButtonProps = {
    variant: "filled" | "outlined" | "ghost" | "text";
    colour?: "blue.bg" | "blue.fg" | "green.bg" | "green.fg" | "red.bg" | "red.fg" | "inherit" | string;
    size?: "small" | "default";
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default function Button({ variant, colour = "inherit", size = "default", style, ...rest }: ButtonProps) {
    return (
        <button
            className={cx(styles, "button", "variant." + variant, "size." + size)}
            style={{ ...style, "--colour": resolveColour(colour) }}
            {...rest}
        />
    );
}

export function StaticButton({ variant, colour = "inherit", size = "default", style, ...rest }: StaticButtonProps) {
    return (
        <div
            className={cx(styles, "button", "static", "variant." + variant, "size." + size)}
            style={{ ...style, "--colour": resolveColour(colour) }}
            {...rest}
        />
    );
}

export function SummaryButton({
    openText,
    closedText,
    variant,
    colour = "inherit",
    size = "default",
    style,
    ...rest
}: Exclude<ButtonProps, 'children'> & { openText?: string; closedText?: string }) {
    return (
        <summary
            className={cx(styles, "button", "variant." + variant, "size." + size)}
            style={{ ...style, "--colour": resolveColour(colour) }}
            {...rest}
        >
            <span data-if="open">{openText}</span>
            <span data-if="closed">{closedText}</span>
        </summary>
    );
}
