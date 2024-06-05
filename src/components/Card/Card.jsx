import styles from './Card.module.scss'

export default function Card({ width, height, children, additionalStyles }) {
    const cardStyle = {
        // width: width || 'auto',
        height: height || 'auto',
        ...additionalStyles,
      }
    return (
        <div className={styles.card} style={cardStyle}>
        {children}
      </div>
    )
}