import styles from './CardCashback.module.scss';

interface ICashbackItem {
  title: string;
  description: string;
}

export const CardCashback = ({ data }: { data: ICashbackItem[] }) => {
  return (
    <div className={styles.cashbacks}>
      {data.map((item, index) => (
        <div className={styles.cashback} key={index}>
          <p className={styles.cashback__description}>{item.description}</p>
          <span className={styles.cashback__title}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
