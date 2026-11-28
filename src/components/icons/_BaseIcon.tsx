import type { SVGProps } from "react";
import styles from './style.module.scss'

export type _BaseIconProps = {} & SVGProps<SVGElement>
export type _BaseIconPublicProps = Exclude<_BaseIconProps, 'children'>;

export default function _BaseIcon(props: _BaseIconProps) {
    // @ts-expect-error why
    return <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props} />
}
