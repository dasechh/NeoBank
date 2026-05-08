import styles from './CardPromo.module.scss';
import { Button, Tooltip } from '@/components';
import { scrollToElement } from '@/utils';
import cardImage from '@images/blue-wave-card-large.jpg';
import { useNavigate } from 'react-router';

interface ICardPromoFeature {
  title: string;
  description: string;
  tooltip?: string;
  id: number;
}

interface ICardPromoProps {
  items: ICardPromoFeature[];
  button: {
    text: string;
    target: string;
    type: 'scroll' | 'navigate';
  };
}

export const CardPromo = ({ data }: { data: ICardPromoProps }) => {
  const navigate = useNavigate();

  return (
    <section className={styles.cardPromo}>
      <div className={styles.cardPromo__content}>
        <h2 className={styles.cardPromo__title}>Platinum digital credit card</h2>
        <p className={styles.cardPromo__description}>
          Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
          transfers without comission and interest.
        </p>
        <ul className={styles.cardPromo__features}>
          {data.items.map((feature) => (
            <li key={feature.id} className={styles.cardPromo__feature}>
              <span className={styles.cardPromo__featureTitle}>{feature.title}</span>
              <span className={styles.cardPromo__featureDescription}>{feature.description}</span>
              {feature.tooltip && (
                <Tooltip text={feature.tooltip} className={styles.cardPromo__tooltip} />
              )}
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          size="sm"
          onClick={
            data.button.type === 'scroll'
              ? () => scrollToElement(data.button.target)
              : () => navigate(data.button.target)
          }
        >
          {data.button.text}
        </Button>
      </div>
      <div className={styles.cardPromo__image}>
        <img src={cardImage} alt="Platinum digital credit card" />
      </div>
    </section>
  );
};
