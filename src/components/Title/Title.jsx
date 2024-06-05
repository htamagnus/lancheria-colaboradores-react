// Title.js
import styles from './Title.module.scss';
import arrowBack from '../../assets/arrow-back.png';
import { useNavigate } from 'react-router-dom';

export default function Title({ text, arrow, redirectTo }) {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }

  return (
    <div className={styles.titleWrapper}>
      {arrow && <img src={arrowBack} alt="Seta" className={styles.arrow} onClick={handleArrowClick}/>}
      <h1 className={styles.title}>{text}</h1>
    </div>
  );
}
