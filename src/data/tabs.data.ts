import { CardBenefits, CardCashback, CardFAQ, CardRates } from '@/components';
import { benefits, cashbacks, faq, rates } from '@/data';

export const tabs = [
  {
    title: 'About card',
    component: CardBenefits,
    props: { data: benefits },
    id: 0,
  },
  {
    title: 'Rates and conditions',
    component: CardRates,
    props: { data: rates },
    id: 1,
  },
  {
    title: 'Cashback',
    component: CardCashback,
    props: { data: cashbacks },
    id: 2,
  },
  {
    title: 'FAQ',
    component: CardFAQ,
    props: { data: faq },
    id: 3,
  },
];
