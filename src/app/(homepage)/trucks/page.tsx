import styles from "./page.module.scss";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline of my Truck Interest",
  description:
    "Around 2 November 2025 I decided to pursue truck driving after 10 months of conflicting interests. I have plans to continue my Computer Science degree and do web development as a hobby.\n" +
    "\n" +
    "This page serves as the timeline for the development of my interest.",
};

export default function TrucksInfo() {
  return (
    <div className={styles.truckingPage}>
      <p>
        <b>
          Around 2 November 2025 I decided to pursue truck driving after 10
          months of conflicting interests.
        </b>{" "}
        I have plans to continue my Computer Science degree and do web
        development as a hobby.
      </p>
      <p>
        This page serves as the timeline for the development of my interest.
      </p>

      <h2>Timeline</h2>
      <div className={styles.timeline}>
        <div>
          <h3>Childhood</h3>
          <p>
            I lived in a truck stop area in California called Castaic, where I
            likely developed a &quot;hidden&quot; interest in trucks.
          </p>
        </div>
        <div>
          <h3>8 June 2024</h3>
          <p>
            I receive Pacific Drive as a birthday gift. It easily becomes one of
            my favourite games.
          </p>
        </div>
        <div>
          <h3>30 June 2024</h3>
          <p style={{ marginBottom: 0 }}>
            With a new interest in driving games, I purchase:
          </p>
          <ul style={{ margin: 0 }}>
            <li>American Truck Simulator</li>
            <li>European Truck Simulator 2</li>
            <li>Snowrunner</li>
            <li>Mudrunner</li>
          </ul>
        </div>
        <div>
          <h3>1 April 2024</h3>
          <p>
            By this point, I had invested the most time in American Truck
            Simulator. The other games have only less than 10 hours on them.
          </p>
          <p>
            I had created rules for myself to keep the game as immersive as
            possible.
          </p>
        </div>
        <div>
          <h3>12 January 2025</h3>
          <p>
            Around 6 AM, I got my first thought about pursuing trucking as a
            career.
          </p>
          <div className={styles.discordMessagePreview}>
            <div>
              <Image
                src="/share/avatar/static/raw.webp"
                width={42}
                height={42}
                alt="RealSGII2's avatar"
                quality={100}
                className={styles.static}
              />

              <Image
                src="/share/avatar/anim/raw.webp"
                width={42}
                height={42}
                alt="RealSGII2's avatar"
                quality={100}
                className={styles.animated}
              />

              <div>
                <p>
                  <span>RealSGII2</span> <time>2025-01-12 05:47</time>
                </p>
                <p>
                  the 6 am autistic thought to ditch my career and become a
                  truck driver
                </p>
              </div>
            </div>

            <div>
              <p>I dunno</p>
            </div>

            <div>
              <p>I reeeeaaaally want to drive trucks</p>
            </div>
          </div>
        </div>

        <div>
          <h3>30 August 2025</h3>
          <p>
            I start a convoy within the Quantum Science Public Discord server. I
            would end up spending a majority of my free time playing with my
            friends in this convoy.
          </p>
        </div>

        <div>
          <h3>1 October 2025</h3>
          <p>
            The desire to go into trucking gets worse. I recognise that I&apos;m
            very susceptible to swapping so I tell people not to pressure me
            into getting a Class-A and going into the industry.
          </p>
          <p style={{ marginBottom: 0 }}>
            When confronted about why I would just play the simulator, I would
            just recite complaints from actual drivers, like:
          </p>
          <ul style={{ marginTop: 0 }}>
            <li>Low pay</li>
            <li>Poor treatment from your company, dispatcher, and society</li>
            <li>Losing your social life</li>
          </ul>
        </div>

        <div>
          <h3>23 October 2025</h3>
          <p>
            Someone watching my gameplay of American Truck Simulator pressures
            me into getting my Class-A.
          </p>
        </div>

        <div>
          <h3>25 October 2025</h3>
          <p>
            I become very stressful as I enter an actual career crisis. Many
            thoughts come into my head about problems with both careers, and
            I&apos;m torn between what I want to do. It becomes increasingly
            obvious that the reason I&apos;m refusing to go into trucking is
            just stubbornness; I have been doing web development for 9
            years&mdash;why change?
          </p>
        </div>

        <div>
          <h3>28 October 2025</h3>
          <p>
            I talk to my mother about what to do. In the end, all we decided was
            that no matter what, I should continue with my degree so at least I
            have a backup option.
          </p>
          <p>
            Over the next couple of days, I become significantly less resistant
            toward the idea of going into trucking.
          </p>
        </div>

        <div>
          <h3>2 November 2025</h3>
          <p>I officially declare trucking as my primary career.</p>
        </div>
      </div>

      <h2 style={{ marginBottom: 12 }}>The Aftermath</h2>
      <div className={styles.infoBlock}>
        <p>
          I&apos;m still quite shocked that I made the switch. Every day,
          I&apos;m watching videos about trucks and looking at r/Truckers.
          Constantly, I am gaining knowledge about the industry and what to
          expect as an aspiring driver.
        </p>
        <p>
          Once I get my CS degree, I&apos;ll likely be going into OTR (On The
          Road) for a year, where I can expect to be away for weeks at a time to
          come back home for about a week. From there, I don&apos;t know whether
          I&apos;ll stay or go into a local job instead (which many people
          prefer).
        </p>
        <p>
          As for my first steps, I am still struggling about where to get my
          skills or where to start. There are CDL schools nearby that are quite
          cheap, but I could also get trained at my first job. Two options
          I&apos;m looking into starting at are both Knight-Swift and Schneider.
          To me, it&apos;s more of a pick-your-poison situation.
        </p>
      </div>
    </div>
  );
}
