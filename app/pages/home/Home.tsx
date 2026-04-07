import styles from './Home.module.scss';

import { ExchangeRates } from '@components/sections/ExchangeRates';
import { NewsletterSubscription } from '@components/sections/NewsletterSubscription';
import { CardDesignPromo } from '@components/sections/CardDesignPromo';
import { ProvidingFeatures } from '@components/sections/ProvidingFeatures';
import { ServiceMap } from '@components/sections/ServiceMap';
import { Support } from '@components/sections/Support';

export function Home() {
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardDesignPromo />
        <ProvidingFeatures />
        <ExchangeRates />
        <ServiceMap />
        <Support />
        <NewsletterSubscription subscriptionName="Bank News" />
      </div>
    </main>
  );
}
