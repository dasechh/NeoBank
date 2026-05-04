import styles from './CardBenefits.module.scss';

interface IBenefitProps {
  iconSrc: string;
  title: string;
  description: string;
  id: number;
}

export const CardBenefits = ({ data }: { data: IBenefitProps[] }) => {
  return (
    <div className={styles.benefits}>
      {data.map((item) => (
        <div className={styles.benefit} key={item.id}>
          <img src={item.iconSrc} className={styles.benefit__icon} aria-hidden="true" />
          <span className={styles.benefit__title}>{item.title}</span>
          <p className={styles.benefit__description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};
