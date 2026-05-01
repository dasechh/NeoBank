import { cardPromoFeatures, getCardSteps, tabs } from '@/data';
import styles from './Loan.module.scss';
import { CardPromo, Tabs, HowToGetCard, Prescoring } from '@/components';

export const Loan = () => {
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardPromo data={cardPromoFeatures} />
        <Tabs data={tabs} />
        <HowToGetCard data={getCardSteps} />
        <Prescoring />
      </div>
    </main>
  );
};

export default Loan;
