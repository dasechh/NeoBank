import styles from './ProvidingFeatures.module.scss';

import featuresImg from '~/assets/images/features-illustration.svg';
import checkIcon from '~/assets/icons/check.svg';

const FEATURES_LIST: string[] = [
  'Powerfull online protection.',
  'Cashback without borders.',
  'Personal design.',
  'Work anywhere in the world',
];

export const ProvidingFeatures = () => {
  return (
    <section className={styles.features}>
      <img src={featuresImg} alt="" className={styles.features__image} />
      <div className={styles.features__content}>
        <h3 className={styles.features__heading}>We Provide Many Features You Can Use</h3>
        <p className={styles.features__text}>
          You can explore the features we provide with fun and have their own functions each feature
        </p>
        <ul className={styles.features__items}>
          {FEATURES_LIST.map((text) => (
            <li key={text}>
              <img src={checkIcon} alt="check" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
