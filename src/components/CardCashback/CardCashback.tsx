import styles from './CardCashback.module.scss';
import { CardCashbackItem, type ICashbackItem } from './CardCashbackItem';

export const CardCashback = ({ data }: { data: ICashbackItem[] }) => {
  return (
    <div className={styles.cashbacks}>
      {data.map((item, index) => (
        <CardCashbackItem
          key={item.id || index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
