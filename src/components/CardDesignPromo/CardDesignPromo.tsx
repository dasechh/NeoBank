import styles from './CardDesignPromo.module.scss';

import waveImg from '~/assets/images/blue-particles-card.jpg';
import sphereImg from '~/assets/images/blue-sphere-card.jpg';
import neonImg from '~/assets/images/neon-lines-card.jpg';
import particlesImg from '~/assets/images/blue-particles-card.jpg';

import { Button } from '~/components/Button';

interface ICardProps {
  id: string;
  src: string;
  title: string;
}

const CARD_DESIGNS: ICardProps[] = [
  { id: 'wave', src: waveImg, title: 'Blue wave card' },
  { id: 'sphere', src: sphereImg, title: 'Blue sphere card' },
  { id: 'neon', src: neonImg, title: 'Neon lines card' },
  { id: 'particles', src: particlesImg, title: 'Blue particles card' },
];

export const CardDesignPromo = () => {
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
        {CARD_DESIGNS.map((card) => (
          <img
            src={card.src}
            key={card.id}
            alt={card.title}
            className={styles.cardsPromo__image}
          ></img>
        ))}
      </div>
    </section>
  );
};
