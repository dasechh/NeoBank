import styles from './ProvidingFeatures.module.scss';
import featuresImg from '@images/features-illustration.svg';
import checkIcon from '@icons/check.svg';

interface IFeature {
  text: string;
  id: number;
}

export const ProvidingFeatures = ({ data }: { data: IFeature[] }) => {
  return (
    <section className={styles.features}>
      <img src={featuresImg} alt="" className={styles.features__image} />
      <div className={styles.features__content}>
        <h3 className={styles.features__heading}>We Provide Many Features You Can Use</h3>
        <p className={styles.features__text}>
          You can explore the features we provide with fun and have their own functions each feature
        </p>
        <ul className={styles.features__items}>
          {data.map((feature) => (
            <li key={feature.id}>
              <img src={checkIcon} alt="check" aria-hidden="true" />
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
