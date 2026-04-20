import styles from './Home.module.scss';
import {
  ExchangeRates,
  NewsletterSubscription,
  CardDesignPromo,
  ProvidingFeatures,
  ServiceMap,
  Support,
  Slider,
  NewsCard,
} from '@/components';
import { msIn15Minutes, msInMinute } from '@/constants';
import { useExchangeRates, useNews } from '@/hooks';
import type { IFetchNewsParams } from '@/types';

const CURRENCIES = {
  from: 'RUB',
  to: ['EUR', 'RSD', 'AUD', 'CAD', 'USD', 'CNY'],
};

const NEWS: IFetchNewsParams = {
  country: 'us',
  category: 'business',
  pageSize: 30,
};

const { sliderName, sliderDescription } = {
  sliderName: 'Current news from the world of finance',
  sliderDescription: `We update the news feed every ${msIn15Minutes / msInMinute} minutes. You can learn more by clicking on the news you are interested in.`,
};

export const Home = () => {
  const { rates, date, updateInterval, ratesLoading } = useExchangeRates(CURRENCIES);
  const { news, loading: newsLoading } = useNews({ params: NEWS, checkImage: true });
  return (
    <main>
      <div className={styles.main + ' container'}>
        <CardDesignPromo />
        <ProvidingFeatures />
        <ExchangeRates
          rates={rates}
          date={date}
          updateInterval={updateInterval}
          ratesLoading={ratesLoading}
        />
        <ServiceMap />
        <Slider
          sliderName={sliderName}
          sliderDescription={sliderDescription}
          newsLoading={newsLoading}
        >
          {news.map((article) => (
            <NewsCard {...article} key={article.id} />
          ))}
        </Slider>
        <Support />
        <NewsletterSubscription subscriptionName="Bank News" />
      </div>
    </main>
  );
};
