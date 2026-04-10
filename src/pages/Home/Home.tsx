import styles from './Home.module.scss';

import { ExchangeRates } from '@/components/ExchangeRates';
import { NewsletterSubscription } from '@/components/NewsletterSubscription';
import { CardDesignPromo } from '@/components/CardDesignPromo';
import { ProvidingFeatures } from '@/components/ProvidingFeatures';
import { ServiceMap } from '@/components/ServiceMap';
import { Support } from '@/components/Support';
import { useExchangeRates } from '@/hooks/useExchangeRates';

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
