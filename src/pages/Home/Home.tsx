import styles from './Home.module.scss';
import { ExchangeRates, NewsletterSubscription, CardDesignPromo, ProvidingFeatures, ServiceMap, Support } from '@/components';
import { useExchangeRates } from '@/hooks';

const CURRENCIES = {
  from: 'RUB',
  to: ['EUR', 'RSD', 'AUD', 'CAD', 'USD', 'CNY'],
};

export const Home = () => {
  const { rates, date, updateInterval } = useExchangeRates(CURRENCIES);
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardDesignPromo />
        <ProvidingFeatures />
        <ExchangeRates rates={rates} date={date} updateInterval={updateInterval} />
        <ServiceMap />
        <Support />
        <NewsletterSubscription subscriptionName="Bank News" />
      </div>
    </main>
  );
};
