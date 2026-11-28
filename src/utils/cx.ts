export default function cx(
    styleObject: { [index: string]: string },
    ...classes: (string | undefined | null | boolean)[]
) {
    return classes
        .filter((x) => typeof x == "string")
        .map((x) => styleObject[x])
        .join(" ");
}
