"use client";

import { useTimer } from 'react-timer-hook';
import styles from './style.module.scss';
import type { useTimerResultType } from 'react-timer-hook/dist/types/src/useTimer';

function formatTimer({ days, hours, minutes, seconds, milliseconds }: useTimerResultType) {
    const separator = milliseconds < 500 ? ':' : ' ';
    return [days, hours, minutes, seconds].map(x => x.toString().padStart(2, '0')).join(separator);
}

export default function TruckClient() {
    const noticeTimer = useTimer({ expiryTimestamp: new Date(1796220000000), interval: 500 });
    const quitTimer = useTimer({ expiryTimestamp: new Date(1799330400000), interval: 500 });
    const schoolTimer = useTimer({ expiryTimestamp: new Date(1800367200000), interval: 500 });

    return (<div
        style={{
            padding: '24px 0',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
        }}
    >
        <span className='nocopy' />

        <div className={styles.box}>
            <p className={styles.timer}>
                <span>{formatTimer(noticeTimer)}</span>
            </p>

            <p>until notice gets handed in</p>
        </div>

        <div className={styles.row}>
            <div className={styles.box}>
                <p className={styles.timer}>
                    <span>{formatTimer(quitTimer)}</span>
                </p>

                <p>until resignation</p>
            </div>
            <div className={styles.box}>
                <p className={styles.timer}>
                    <span>{formatTimer(schoolTimer)}</span>
                </p>

                <p>until CDL school</p>
            </div>
        </div>

        <a className={styles.blueBox} href='//truck.realsgii2.dev/' target='_blank' rel='noreferrer'>
            Check out the online status prototype
            <span>Take a gander</span>
        </a>
    </div>);
}
