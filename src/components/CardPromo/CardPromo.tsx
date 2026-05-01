import styles from './CardPromo.module.scss';
import { Button, Tooltip } from '@/components';
import { scrollToElement } from '@/utils';
import cardImage from '@images/blue-wave-card-large.jpg';

interface ICardPromoFeature {
  title: string;
  description: string;
  Tooltip?: string;
  id: number;
}

export const CardPromo = ({ data }: { data: ICardPromoFeature[] }) => {
  return (
    <section className={styles.cardPromo}>
      <div className={styles.cardPromo__content}>
        <h2 className={styles.cardPromo__title}>Platinum digital credit card</h2>
        <p className={styles.cardPromo__description}>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
          transfers without comission and interest.
        </p>
        <ul className={styles.cardPromo__features}>
          {data.map((feature) => (
            <li key={feature.id} className={styles.cardPromo__feature}>
              <span className={styles.cardPromo__featureTitle}>{feature.title}</span>
              <span className={styles.cardPromo__featureDescription}>{feature.description}</span>
              {feature.Tooltip && (
                <Tooltip text={feature.Tooltip} className={styles.cardPromo__Tooltip} />
              )}
            </li>
          ))}
        </ul>
        <Button variant="primary" size="sm" onClick={() => scrollToElement('prescoring')}>
          Apply for card
        </Button>
      </div>
      <div className={styles.cardPromo__image}>
        <img src={cardImage} alt="Platinum digital credit card" />
      </div>
    </section>
  );
};
