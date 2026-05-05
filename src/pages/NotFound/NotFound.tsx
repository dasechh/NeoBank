import { Button } from '@/components';
import styles from './NotFound.module.scss';
import imageSrc from '@images/404.png';
import { useNavigate } from 'react-router';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className={styles.main + ' container'}>
        <div className={styles.main__content}>
          <p className={styles.main__oops}>Oops....</p>
          <h2 className={styles.main__error}>Page not found</h2>
          <p className={styles.main__description}>
            This Page doesn`t exist or was removed! We suggest you go back
          </p>
          <Button variant="primary" className={styles.main__button} onClick={() => navigate(-1)}>
            Go back
          </Button>
        </div>
        <img src={imageSrc} alt="error" className={styles.main__image} />
      </div>
    </main>
  );
};
