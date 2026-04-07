import styles from "./ExchangeRates.module.scss";
import { Link } from "react-router";
import { fetchCurrency } from "@shared/api/fetchCurrency";
import type { ICurrencyParams } from "@shared/api/fetchCurrency";
import { useEffect, useState } from "react";

import bankIcon from "./assets/bank.svg";

const CURRENCIES: ICurrencyParams = {
  from: "RUB",
  to: "EUR,RSD,AUD,CAD,USD,CNY",
};

const timer: number = 15 * 60 * 1000;

function normalizeRate(rate: number): string {
  return (1 / rate).toFixed(2);
}

function exchangeItem(currency: string, value: number) {
  return (
    <li key={currency} className={styles.exchange__item}>
      {currency}:<span>{normalizeRate(value)}</span>
    </li>
  );
}

export function ExchangeRates() {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [date, setDate] = useState<string>("");

  async function loadRates() {
    try {
      const data = await fetchCurrency(CURRENCIES);
      setRates(data.result);
      setDate(data.date.replace(/-/g, "."));
    } catch (error: unknown) {
      throw new Error(String(error));
    }
  }

  useEffect(() => {
    loadRates();

    const interval = setInterval(() => {
      loadRates();
    }, timer);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.exchange || ""}>
      <article className={styles.exchange__wrapper || ""}>
        <h3 className={styles.exchange__title || ""}>
          Exchange rate in internet bank
        </h3>
        <h4 className={styles.exchange__subtitle || ""}>Currency</h4>
        <ul className={styles.exchange__list || ""}>
          {rates &&
            Object.entries(rates).map(([currency, value]) =>
              exchangeItem(currency, value),
            )}
        </ul>
        <Link to="" className={styles.exchange__link || ""}>
          All courses
        </Link>
      </article>
      <div className={styles.exchange__decorations || ""}>
        <span className={styles.exchange__date || ""} key={date}>
          Update every 15 minutes, MSC {date}
        </span>
        <figure className={styles.exchange__figure || ""}>
          <img
            src={bankIcon}
            alt="Exchange"
            className={styles.exchange__image || ""}
          />
        </figure>
      </div>
    </section>
  );
}
