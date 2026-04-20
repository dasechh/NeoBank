import { useEffect, useState } from 'react';
import { fetchNews } from '@/services';
import type { IFetchNewsParams, INewsArticle } from '@/types';
import { msIn15Minutes } from '@/constants';
import { validateImage } from '@/utils';

export function useNews({ params, checkImage }: { params: IFetchNewsParams; checkImage: boolean }) {
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNews() {
    setLoading(true);

    try {
      const data = await fetchNews(params);
      if (data.status === 'ok') {
        if (checkImage) {
          const filtered = (
            await Promise.all(
              data.articles.map(async (article) => {
                const isValid = await validateImage(article.urlToImage || '');
                return isValid ? article : null;
              }),
            )
          ).filter(Boolean);
          setNews(filtered as INewsArticle[]);
        } else setNews(data.articles);
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
