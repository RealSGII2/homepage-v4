export type ResolveableColour = "blue.bg" | "blue.fg" | "green.bg" | "green.fg" | "red.bg" | "red.fg";

const colours: { [index: string]: string } = {
    "blue.bg": "#4c94fe",
    "blue.fg": "#7db1fe",
    "green.bg": "#26e794",
    "green.fg": "#72e1c4",
    "red.bg": "#e94f4f",
    "red.fg": "#ff7171",
    "yellow.bg": "#ffd46f",
    "yellow.fg": "#ffe199",
    "purple.bg": "#b480ff",
    "purple.fg": "#d2b4ff",
};

export default function resolveColour(colour: ResolveableColour | string) {
    return colours[colour] ?? colour;
}
