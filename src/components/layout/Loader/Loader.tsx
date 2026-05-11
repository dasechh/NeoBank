import styles from './Loader.module.scss';
import { Spinner } from '@/components';

export const Loader = () => {
  return (
    <main className={styles.main}>
      <Spinner />
    </main>
  );
};
