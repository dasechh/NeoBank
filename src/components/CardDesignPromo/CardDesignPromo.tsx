import styles from './CardDesignPromo.module.scss';
import { Button } from '@/components';

interface ICardDesignPromoProps {
  id: string;
  src: string;
  title: string;
}

export const CardDesignPromo = ({ data }: { data: ICardDesignPromoProps[] }) => {
  return (
    <section className={styles.cardsPromo}>
      <div className={styles.cardsPromo__content}>
        <h2 className={styles.cardsPromo__heading}>
          Choose the design you like and apply for card right now
        </h2>
        <Button size="md" variant="primary">
          Choose the Card
        </Button>
      </div>
      <div className={styles.cardsPromo__list}>
        {data.map((card) => (
          <img src={card.src} key={card.id} alt={card.title} className={styles.cardsPromo__image} />
        ))}
      </div>
    </section>
  );
};
