import styles from './CardBenefits.module.scss';

export interface IBenefitProps {
  iconSrc: string;
  title: string;
  description: string;
  id: number;
}

export const CardBenefitsItem = ({ iconSrc, title, description, id }: IBenefitProps) => {
  return (
    <div className={styles.benefit} key={id}>
      <img src={iconSrc} className={styles.benefit__icon} aria-hidden="true" />
      <span className={styles.benefit__title}>{title}</span>
      <p className={styles.benefit__description}>{description}</p>
    </div>
  );
};
