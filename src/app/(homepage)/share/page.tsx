import type { Metadata } from "next";
import styles from "./style.module.scss";
import { CopyButton } from "@/app/(homepage)/share/client";

export const metadata: Metadata = {
    title: "Games",
};

export default function ShareHome() {
    return (
        <div className={styles.main}>
            <span className="nocopy" />

            <p style={{ marginBottom: 0 }}>Embed a button</p>
            <p style={{ marginTop: 4, color: "rgba(255, 255, 255, 0.6)" }}>How cool that I get to be recognised!</p>

            <div className={styles.snippet}>
                <div className={styles.area}>
                    <object height="31px" data="https://realsgii2.dev/share/button/standard.svg"></object>
                </div>

                <code>
                    <pre>
                        &lt;<span className="element">a</span>
                        {"\n"}
                        {"    "}
                        <span className="key">href</span>=
                        <span className="value">&quot;https://realsgii2.dev/&quot;</span>
                        {"\n"}
                        {"    "}
                        <span className="key">target</span>=<span className="value">&quot;_blank&quot;</span>
                        {"\n"}
                        {"    "}
                        <span className="key">rel</span>=<span className="value">&quot;noreferrer&quot;</span>
                        {"\n"}
                        {"    "}
                        <span className="key">style</span>=
                        <span className="value">
                            &quot;display: inline-block; width: <span data-width>88</span>px; height:{" "}
                            <span data-height>31</span>
                            px;&quot;
                        </span>
                        {"\n"}
                        &gt;{"\n    "}&lt;<span className="element">object</span>
                        {"\n        "}
                        <span className="key">height</span>=
                        <span className="value">
                            &quot;<span data-height>31</span>px&quot;
                        </span>
                        {"\n        "}
                        <span className="key">data</span>=
                        <span className="value">
                            &quot;https://realsgii2.dev/share/button/<span id="urlId">standard</span>.svg&quot;
                        </span>
                        {"\n        "}
                        <span className="key">style</span>=
                        <span className="value">&quot;position: relative; z-index: -1; outline: none;&quot;</span>
                        {"\n    "}&gt;&lt;/<span className="element">object</span>&gt;{"\n"}&lt;/
                        <span className="element">a</span>&gt;
                    </pre>
                </code>

                <footer>
                    <CopyButton
                        copyText={`
<a
    href="https://realsgii2.dev/"
    target="_blank"
    rel="noreferrer"
    style="display: inline-block; width: 88px; height: 31px;"
>
    <object
        height="31px"
        data="https://realsgii2.dev/share/button/standard.svg"
        style="position: relative; z-index: -1; outline: none;"
    ></object>
</a>`.slice(1)}
                    />
                </footer>
            </div>
        </div>
    );
}
