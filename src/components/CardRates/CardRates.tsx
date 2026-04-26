import styles from './CardRates.module.scss';

export interface IRate {
  id?: number | string;
  label: string;
  value: string[];
}

export const CardRates = ({ data }: { data: IRate[] }) => {
  return (
    <table className={styles.rates}>
      <tbody className={styles.rates__body}>
        {data.map((rate, index) => (
          <tr key={rate.id || index} className={styles.rates__row}>
            <th scope="row" className={styles.rates__label}>
              {rate.label}
            </th>
            <td className={styles.rates__value}>
              {rate.value.map((v, index) => (
                <span key={index}>{v}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
