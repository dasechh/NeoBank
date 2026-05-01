import styles from './CardBenefits.module.scss';

interface IBenefitProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const CardBenefits = ({ data }: { data: IBenefitProps[] }) => {
  return (
    <div className={styles.benefits}>
      {data.map((item, index) => (
        <div className={styles.benefit} key={index}>
          <img src={item.iconSrc} className={styles.benefit__icon} aria-hidden="true" />
          <span className={styles.benefit__title}>{item.title}</span>
          <p className={styles.benefit__description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
