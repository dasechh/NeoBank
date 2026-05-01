import { useEffect, useState, useCallback } from 'react';
import { fetchNews } from '@/services';
import type { IFetchNewsParams, INewsArticle } from '@/types';
import { msIn15Minutes } from '@/constants';
import { validateImage } from '@/utils';

interface IUseNews {
  params: IFetchNewsParams;
  checkImage?: boolean;
  checkDescription?: boolean;
}

export function useNews({ params, checkImage, checkDescription }: IUseNews) {
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = useCallback(async () => {
    setLoading(true);

    try {
      const data = await fetchNews(params);
      if (data.status !== 'ok') {
        throw new Error(data.message || 'Failed to fetch news');
      }
      let articles = data.articles;
      if (checkDescription) {
        articles = articles.filter(
          (article) => article.description !== null && article.description.trim() !== '',
        );
      }
      if (checkImage) {
        const results = await Promise.allSettled(
          articles.map((article) => validateImage(article.urlToImage || '')),
        );
        articles = articles.filter((_, i) => results[i].status === 'fulfilled');
      }
      setNews(articles);
    } catch (error) {
      console.error('useNews Error:', error);
    } finally {
      setLoading(false);
    }
  }, [params, checkImage, checkDescription]);

  useEffect(() => {
    loadNews();
    const interval = setInterval(loadNews, msIn15Minutes);
    return () => clearInterval(interval);
  }, [loadNews]);

  return { news, loading, refresh: loadNews };
}
