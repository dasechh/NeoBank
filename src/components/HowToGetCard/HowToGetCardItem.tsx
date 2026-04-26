import { Divider } from '@/components';
import styles from './HowToGetCard.module.scss';

interface IHowToGetCardItemProps {
  stepNumber: number;
  text: string;
}

export const HowToGetCardItem = ({ stepNumber, text }: IHowToGetCardItemProps) => {
  return (
    <div className={styles.HowToGetCardItem}>
      <div className={styles.HowToGetCardItem__top}>
        <div className={styles.HowToGetCardItem__number}>{stepNumber}</div>
        <Divider />
      </div>
      <p className={styles.HowToGetCardItem__text}>{text}</p>
    </div>
  );
};
