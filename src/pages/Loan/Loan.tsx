import styles from './Loan.module.scss';
import { CardPromo } from '@/components';
export const Loan = () => {
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardPromo />
      </div>
    </main>
  );
};
