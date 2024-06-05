import styles from './Modal.module.scss';

export default function Modal({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_box}>
        {children}
      </div>
    </div>
  );
}
