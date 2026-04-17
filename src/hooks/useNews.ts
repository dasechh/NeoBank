import { useEffect, useState } from 'react';
import { fetchNews } from '@/services';
import type { IFetchNewsParams, INewsArticle } from '@/types';
import { msIn15Minutes } from '@/constants';

export function useNews(params: IFetchNewsParams) {
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNews() {
    setLoading(true);

    try {
      const data = await fetchNews(params);
      if (data.status === 'ok') {
        setNews(data.articles);
      } else {
        throw new Error(data.message || 'Failed to fetch news');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, msIn15Minutes);
    return () => clearInterval(interval);
  }, []);

  return { news, loading };
}
