import styles from './ExchangeRates.module.scss';
import { Link } from 'react-router';
import bankIcon from '@icons/bank.svg';
import type { IExchangeRatesProps } from '@/types';

export const ExchangeRates = ({ rates, date, updateInterval }: IExchangeRatesProps) => {
  return (
    <section className={styles.exchange}>
      <article className={styles.exchange__wrapper}>
        <h3 className={styles.exchange__title}>Exchange rate in internet bank</h3>
        <h4 className={styles.exchange__subtitle}>Currency</h4>
        <ul className={styles.exchange__list}>
          {rates &&
            Object.entries(rates).map(([currency, value]) => (
              <li key={currency} className={styles.exchange__item}>
                {currency}:<span>{value}</span>
              </li>
            ))}
        </ul>
        <Link to="" className={styles.exchange__link}>
          All courses
        </Link>
      </article>
      <div className={styles.exchange__decorations}>
        <span className={styles.exchange__date}>
          Update every {updateInterval} minutes, MSC {date}
        </span>
        <figure className={styles.exchange__figure}>
          <img src={bankIcon} alt="Exchange" className={styles.exchange__image} />
        </figure>
      </div>
    </section>
  );
};
