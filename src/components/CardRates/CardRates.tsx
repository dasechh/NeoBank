import styles from './CardRates.module.scss';

interface IRate {
  label: string;
  value: string[];
}

export const CardRates = ({ data }: { data: IRate[] }) => {
  return (
    <table className={styles.rates}>
      <tbody className={styles.rates__body}>
        {data.map((rate) => (
          <tr key={rate.label} className={styles.rates__row}>
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
