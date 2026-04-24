import styles from './CardBenefits.module.scss';

interface IBenefitProps {
  iconSrc: string;
  title: string;
  description: string;
}
export interface ICardBenefitsItemProps extends IBenefitProps {
  id: number;
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
