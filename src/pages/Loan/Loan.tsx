import styles from './Loan.module.scss';
import {
  CardPromo,
  Tabs,
  CardBenefits,
  CardCashback,
  CardFAQ,
  CardRates,
  benefitsData,
  ratesData,
  cashbackData,
  FAQchildren,
} from '@/components';

type TTabItem<T extends React.ComponentType<any>> = {
  id: number;
  title: string;
  component: T;
  props: React.ComponentProps<T>;
};

const tabsChildren: TTabItem<
  typeof CardRates | typeof CardBenefits | typeof CardCashback | typeof CardFAQ
>[] = [
  {
    title: 'About card',
    component: CardBenefits,
    props: { data: benefitsData },
    id: 0,
  },
  {
    title: 'Rates and conditions',
    component: CardRates,
    props: { data: ratesData },
    id: 1,
  },
  {
    title: 'Cashback',
    component: CardCashback,
    props: { data: cashbackData },
    id: 2,
  },
  {
    title: 'FAQ',
    component: CardFAQ,
    props: { data: FAQchildren },
    id: 3,
  },
];

const Loan = () => {
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardPromo />
        <Tabs data={tabsChildren} />
      </div>
    </main>
  );
};

export default Loan