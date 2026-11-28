import styles from "./style.module.scss";
import cx from "@/utils/cx";
import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type BoxProps = {
    variant?: "default" | "preview" | "actionRow" | "outlined";
    noStack?: boolean;
    padding?: number;
    margin?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type ButtonBoxProps = {
    variant?: "default" | "blue";
    noStack?: boolean;
    padding?: number;
    margin?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Box({
    variant = "default",
    noStack = false,
    padding = 16,
    margin = 16,
    style,
    ...rest
}: BoxProps) {
    return (
        <div
            className={cx(styles, "box", 'variant.' + variant, !noStack && "canStack")}
            {...rest}
            style={{ ...style, padding: padding ?? style?.padding, marginBottom: margin ?? style?.marginBottom }}
        />
    );
}

export function ButtonBox({
    variant = "default",
    noStack = false,
    padding = 16,
    margin = 16,
    style,
    ...rest
}: ButtonBoxProps) {
    return (
        <button
            className={cx(styles, "box", 'button', 'variant.button.' + variant, !noStack && "canStack")}
            {...rest}
            style={{ ...style, padding: padding ?? style?.padding, marginBottom: margin ?? style?.marginBottom }}
        />
    );
}

export function ButtonBoxRow({ children, style }: { children: ReactNode, style?: CSSProperties }) {
    return <div className={styles.buttonBoxRow} style={style}>
        {children}
    </div>
}
