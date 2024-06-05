import styles from './Subtitle.module.scss';

export default function Subtitle({ text }) {
    return (
        <h2 className={styles.subtitle}>{text}</h2>
    )
}