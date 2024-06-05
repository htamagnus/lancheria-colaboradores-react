import styles from './Background.module.scss'

export default function Background({ children }) {
    return (    
        <div className={styles.background}>
        {children}
      </div>
    )
}