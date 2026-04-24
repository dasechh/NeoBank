import styles from './CardPromo.module.scss';
import { Button } from '@/components';
import cardImage from '@images/blue-wave-card-large.jpg';

interface ICardPromoFeature {
  title: string;
  description: string;
  id: number;
}

const cardPromoFeatures: ICardPromoFeature[] = [
  { title: 'Up to 160 days', description: 'No percent', id: 1 },
  {
    title: 'Up to 600 000 ₽',
    description: 'Credit limit',
    id: 2,
  },
  {
    title: '0 ₽',
    description: 'Card service is free',
    id: 3,
  },
];

export const CardPromo = () => {
  return (
    <section className={styles.cardPromo}>
      <div className={styles.cardPromo__content}>
        <h2 className={styles.cardPromo__title}>Platinum digital credit card</h2>
        <p className={styles.cardPromo__description}>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
          transfers without comission and interest.
        </p>
        <ul className={styles.cardPromo__features}>
          {cardPromoFeatures.map((feature) => (
            <li key={feature.id} className={styles.cardPromo__feature}>
              <span className={styles.cardPromo__featureTitle}>{feature.title}</span>
              <span className={styles.cardPromo__featureDescription}>{feature.description}</span>
            </li>
          ))}
        </ul>
        <Button variant="primary" size="sm">
          Apply for card
        </Button>
      </div>
      <div className={styles.cardPromo__image}>
        <img src={cardImage} alt="Platinum digital credit card" />
      </div>
    </section>
  );
};
