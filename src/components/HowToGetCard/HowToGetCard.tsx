import styles from './HowToGetCard.module.scss';
import { Divider } from '@/components';

interface IGetStep {
  text: string;
  stepNumber: number;
}

export const HowToGetCard = ({ data }: { data: IGetStep[] }) => {
  return (
    <section className={styles.HowToGetCard}>
      <h3 className={styles.HowToGetCard__heading}>How to get a card</h3>
      <div className={styles.HowToGetCard__steps}>
        {data.map((item) => (
          <div className={styles.HowToGetCardItem} key={item.text}>
            <div className={styles.HowToGetCardItem__top}>
              <div className={styles.HowToGetCardItem__number}>{item.stepNumber}</div>
              <Divider />
            </div>
            <p className={styles.HowToGetCardItem__text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
1;
