import styles from './CardBenefits.module.scss';

export interface IBenefitProps {
  iconSrc: string;
  title: string;
  description: string;
  id?: string | number;
}

export const CardBenefitsItem = ({ iconSrc, title, description }: IBenefitProps) => {
  return (
    <div className={styles.benefit}>
      <img src={iconSrc} className={styles.benefit__icon} aria-hidden="true" />
      <span className={styles.benefit__title}>{title}</span>
      <p className={styles.benefit__description}>{description}</p>
    </div>
  );
};
