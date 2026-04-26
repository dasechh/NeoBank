import styles from './CardCashback.module.scss';

export interface ICashbackItem {
  title: string;
  description: string;
  id?: number | string;
}

export const CardCashbackItem = ({ title, description }: ICashbackItem) => {
  return (
    <div className={styles.cashback}>
      <p className={styles.cashback__description}>{description}</p>
      <span className={styles.cashback__title}>{title}</span>
    </div>
  );
};
