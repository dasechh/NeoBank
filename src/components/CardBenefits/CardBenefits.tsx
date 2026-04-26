import styles from './CardBenefits.module.scss';
import { CardBenefitsItem, type IBenefitProps } from './CardBenefitsItem';

export const CardBenefits = ({ data }: { data: IBenefitProps[] }) => {
  return (
    <div className={styles.benefits}>
      {data.map((benefit, index) => (
        <CardBenefitsItem
          key={benefit.id || index}
          iconSrc={benefit.iconSrc}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};
