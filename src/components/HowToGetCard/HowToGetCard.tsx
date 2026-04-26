import styles from './HowToGetCard.module.scss';
import { HowToGetCardItem } from './HowToGetCardItem';

const stepsInfo = [
  'Fill out an online application - you do not need to visit the bank',
  "Find out the bank's decision immediately after filling out the application",
  'The bank will deliver the card free of charge, wherever convenient, to your city',
];

export const HowToGetCard = () => {
  return (
    <section className={styles.HowToGetCard}>
      <h3 className={styles.HowToGetCard__heading}>How to get a card</h3>
      <div className={styles.HowToGetCard__steps}>
        {stepsInfo.map((text, index) => (
          <HowToGetCardItem key={index} stepNumber={index + 1} text={text} />
        ))}
      </div>
    </section>
  );
};
1;
