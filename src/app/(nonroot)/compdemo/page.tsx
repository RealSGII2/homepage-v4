import RootLayout from "@/app/(homepage)/layout";
import Button, { StaticButton, SummaryButton } from "@/components/button";
import Theme from "@/components/theme";
import Box, { ButtonBox, ButtonBoxRow } from "@/components/box";

import styles from "./page.module.scss";
import CopyIcon from "@/components/icons/CopyIcon";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import cx from "@/utils/cx";

function NoControls() {
    return <p className={styles.emptyControls}>No controls defined</p>;
}

function Param({ name, value, type }: { name: string; value: string; type: "string" | "number" | "boolean" }) {
    return (
        <code className={cx(styles, "param", "type." + type)}>
            <span>{name}</span>=<span>{value}</span>
        </code>
    );
}

export default function Page() {
    return (
        <RootLayout>
            <Theme colour="blue.bg">
                <h2>Buttons</h2>
                <>
                    <p className={styles.componentTitle}>Button Variants</p>
                    <Box variant="preview">
                        <div className={styles.row}>
                            <Button variant="filled">Filled</Button>
                            <Button variant="ghost" colour="blue.fg">
                                Ghost
                            </Button>
                            <Button variant="outlined" colour="blue.fg">
                                Outlined
                            </Button>
                            <Button variant="text" colour="blue.fg">
                                Text
                            </Button>
                        </div>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Button Sizes</p>
                    <Box variant="preview">
                        <div className={styles.row}>
                            <Button variant="filled" size="small">
                                Small
                            </Button>
                            <Button variant="filled">Default</Button>
                        </div>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Button Colours</p>
                    <Box variant="preview">
                        <div className={styles.row}>
                            {[
                                "blue.bg",
                                "blue.fg",
                                "green.bg",
                                "green.fg",
                                "red.bg",
                                "red.fg",
                                "yellow.bg",
                                "yellow.fg",
                                "purple.bg",
                                "purple.fg",
                                "white",
                                "black",
                                "blue",
                                "inherit",
                                "#fc03e3",
                            ].map((x) => (
                                <Button variant="filled" colour={x} key={x}>
                                    {x}
                                </Button>
                            ))}
                        </div>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Button Icons</p>
                    <Box variant="preview">
                        <div className={styles.row}>
                            <Button variant="filled">
                                <CopyIcon />
                                Copy
                            </Button>
                            <Button variant="ghost" colour="blue.fg">
                                Next
                                <ArrowRightIcon />
                            </Button>
                        </div>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Using buttons as detail summaries</p>
                    <Box variant="preview">
                        <details>
                            <SummaryButton variant="outlined" colour="white" openText="Close" closedText="Open" />
                            <p style={{ marginBottom: 0 }}>Details contents</p>
                        </details>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Using buttons as decoration</p>
                    <Box variant="preview">
                        <ButtonBox variant="blue" margin={0}>
                            <ButtonBoxRow>
                                <p style={{ fontSize: 16 }}>UI revamp beta</p>
                                <div className={styles.spacer} />
                                <StaticButton variant="filled" style={{ margin: -6 }}>Check it out <ArrowRightIcon /></StaticButton>
                            </ButtonBoxRow>
                        </ButtonBox>
                    </Box>
                </>

                <h2>Box</h2>
                <>
                    <p className={styles.componentTitle}>Variants & stacking</p>
                    <Box>i am a box</Box>
                    <Box variant="preview">
                        i am a box (<Param name="variant" value="preview" type="string" />)
                    </Box>
                    <Box noStack>
                        i am a box (<Param name="noStack" value="true" type="boolean" />)
                    </Box>
                    <Box variant="preview">
                        i am a box (<Param name="variant" value="preview" type="string" />)
                    </Box>
                    <Box>i am a box</Box>
                    <Box variant="actionRow">
                        <Button variant="filled">
                            i am in a box (<code>variant=&quot;actionRow&quot;</code>)
                        </Button>

                        <Button variant="ghost" colour="blue.fg">
                            Secondary action
                        </Button>
                    </Box>

                    <Box variant="outlined" noStack>
                        i am a box (<Param name="variant" value="outlined" type="string" />{" "}
                        <Param name="noStack" value="true" type="boolean" />)
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Example (snippet)</p>
                    <Box variant="preview">
                        <button>Hello world!</button>
                    </Box>
                    <Box>
                        <code>
                            <pre style={{ margin: 0 }}>
                                &lt;<span className="el">button</span>&gt;Hello world!&lt;/
                                <span className="el">button</span>&gt;
                            </pre>
                        </code>
                    </Box>
                    <Box variant="actionRow">
                        <Button variant="outlined" colour="white">
                            <CopyIcon /> Copy
                        </Button>
                    </Box>
                </>

                <>
                    <p className={styles.componentTitle}>Button boxes</p>

                    <ButtonBox variant="blue" noStack margin={8}>
                        <ButtonBoxRow>
                            <p style={{ fontSize: 16 }}>UI revamp beta</p>
                            <div className={styles.spacer} />
                            <StaticButton variant="filled" style={{ margin: -6 }}>Check it out <ArrowRightIcon /></StaticButton>
                        </ButtonBoxRow>
                    </ButtonBox>

                    <ButtonBox>
                        <ButtonBoxRow>
                            <p style={{ fontSize: 16 }}>Friends</p>
                            <div className={styles.spacer} />
                            <StaticButton variant="text" size="small" colour="blue.fg" style={{ margin: -6 }}>Manage</StaticButton>
                        </ButtonBoxRow>
                    </ButtonBox>

                    <ButtonBox>
                        <ButtonBoxRow>
                            <p style={{ fontSize: 16 }}>Blocked users</p>
                            <div className={styles.spacer} />
                            <StaticButton variant="text" size="small" colour="blue.fg" style={{ margin: -6 }}>Manage</StaticButton>
                        </ButtonBoxRow>
                    </ButtonBox>

                    <ButtonBox>
                        <ButtonBoxRow>
                            <p style={{ fontSize: 16 }}>Permissions</p>
                            <div className={styles.spacer} />
                            <StaticButton variant="text" size="small" colour="blue.fg" style={{ margin: -6 }}>Manage</StaticButton>
                        </ButtonBoxRow>
                    </ButtonBox>
                </>
            </Theme>
        </RootLayout>
    );
}
