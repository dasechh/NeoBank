import { Link } from 'react-router';
import styles from './Support.module.scss';

export const Support = () => {
  return (
    <section className={styles.support || ''}>
      <h3 className={styles.support__heading || ''}>
        <Link to="">Support</Link>
      </h3>
    </section>
  );
};
