import styles from './CardRates.module.scss';

interface IRate {
  label: string;
  value: string[];
  id: number;
}

const ratesData: IRate[] = [
  {
    label: 'Card currency',
    value: ['Rubles, dollars, euro'],
    id: 0,
  },
  {
    label: 'Interest free period',
    value: ['0% up to 160 days'],
    id: 1,
  },
  {
    label: 'Payment system',
    value: ['Mastercard, Visa'],
    id: 2,
  },
  {
    label: 'Maximum credit limit on the card',
    value: ['600 000 ₽'],
    id: 3,
  },
  {
    label: 'Replenishment and withdrawal',
    value: ['At any ATM. Top up your credit card for free with cash or transfer from other cards'],
    id: 4,
  },
  {
    label: 'Max cashback per month',
    value: ['15 000 ₽'],
    id: 5,
  },
  {
    label: 'Transaction Alert',
    value: [
      '60 ₽ — SMS or push notifications',
      '0 ₽ — card statement, information about transactions in the online bank',
    ],
    id: 6,
  },
];

export const CardRates = () => {
  return (
    <table className={styles.rates}>
      <tbody className={styles.rates__body}>
        {ratesData.map((rate) => (
          <tr key={rate.id} className={styles.rates__row}>
            <th scope="row" className={styles.rates__label}>
              {rate.label}
            </th>
            <td className={styles.rates__value}>
              {rate.value.map((v, i) => (
                <span key={i}>{v}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
