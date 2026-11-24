import type { Metadata } from 'next';
import styles from './style.module.scss';
import type { useTimerResultType } from 'react-timer-hook/dist/types/src/useTimer';
import TruckClient from '@/app/(homepage)/truck/client';

export const metadata: Metadata = {
    title: 'The Countdown',
};

export default function Truck() {
    return <TruckClient />;
}
