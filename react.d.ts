declare module "react" {
    // allow CSS custom properties
    interface CSSProperties {
        [varName: `--${string | 'colour'}`]: string | number | undefined;
    }
}

export {}; // if this file doesn’t `export` anything else, be sure to add this so it gets picked up
