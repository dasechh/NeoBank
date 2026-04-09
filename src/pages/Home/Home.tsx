import styles from './Home.module.scss';

import { ExchangeRates } from '~/components/ExchangeRates';
import { NewsletterSubscription } from '~/components/NewsletterSubscription';
import { CardDesignPromo } from '~/components/CardDesignPromo';
import { ProvidingFeatures } from '~/components/ProvidingFeatures';
import { ServiceMap } from '~/components/ServiceMap';
import { Support } from '~/components/Support';

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
