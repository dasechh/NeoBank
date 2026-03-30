import styles from "./Home.module.scss";
import Button from "@shared/ui/button";

import waveImg from "./assets/cards/blue-particles-card.jpg";
import sphereImg from "./assets/cards/blue-sphere-card.jpg";
import neonImg from "./assets/cards/neon-lines-card.jpg";
import particlesImg from "./assets/cards/blue-particles-card.jpg";
import featuresImg from "./assets/features/features-illustration.svg";
import checkIcon from "./assets/features/check.svg";

interface iCardProps {
  id: string;
  src: string;
  title: string;
}

const CARD_DESIGNS: iCardProps[] = [
  { id: "wave", src: waveImg, title: "Blue wave card" },
  { id: "sphere", src: sphereImg, title: "Blue sphere card" },
  { id: "neon", src: neonImg, title: "Neon lines card" },
  { id: "particles", src: particlesImg, title: "Blue particles card" },
];

function CardDesignPromo() {
  return (
    <section className={styles.cardsPromo || ""}>
      <div className={styles.cardsPromo__content || ""}>
        <h2 className={styles.cardsPromo__heading || ""}>
          Choose the design you like and apply for card right now
        </h2>
        <Button>Choose the Card</Button>
      </div>
      <div className={styles.cardsPromo__list || ""}>
        {CARD_DESIGNS.map((card) => (
          <img
            src={card.src}
            key={card.id}
            alt={card.title}
            className={styles.cardsPromo__image || ""}
          ></img>
        ))}
      </div>
    </section>
  );
}

const LIST_ITEMS: string[] = [
  "Powerfull online protection.",
  "Cashback without borders.",
  "Personal design.",
  "Work anywhere in the world",
];

function createFeatureItem(text: string) {
  return (
    <li key={crypto.randomUUID()}>
      <img src={checkIcon} alt="check" aria-hidden="true" />
      {text}
    </li>
  );
}

function Features() {
  return (
    <section className={styles.features || ""}>
      <img src={featuresImg} alt="" className={styles.features__image || ""} />
      <div className={styles.features__content}>
        <h3 className={styles.features__heading || ""}>
          We Provide Many Features You Can Use
        </h3>
        <p className={styles.features__text}>
          You can explore the features we provide with fun and have their own
          functions each feature
        </p>
        <ul className={styles.features__items}>
          {LIST_ITEMS.map((text) => createFeatureItem(text))}
        </ul>
      </div>
    </section>
  );
}

export default function home() {
  return (
    <main className={styles.main}>
      <CardDesignPromo />
      <Features />
    </main>
  );
}
