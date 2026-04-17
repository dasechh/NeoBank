import axios from 'axios';
import type { IFetchNewsParams, TNewsApiResponse } from '@/types';
import { newsApiKey, newsApiUrl } from '@/constants';
import { markupToText } from '@/utils';

export async function fetchNews({
  country,
  category,
  pageSize = 20,
}: IFetchNewsParams): Promise<TNewsApiResponse> {
  if (pageSize > 100) {
    throw new Error('Page size cannot exceed 100');
  }

  try {
    const response = await axios.get<TNewsApiResponse>(newsApiUrl, {
      params: {
        country,
        category,
        pageSize,
        apiKey: newsApiKey,
      },
    });
    const data = response.data;

    if (data.status === 'error') {
      throw new Error(data.message || 'Unknown API error');
    }

    if (data.totalResults === 0) {
      throw new Error('No news articles found for the given parameters');
    }

    const articles = data.articles.map((article) => ({
      ...article,
      title: markupToText(article.title || ''),
      description: markupToText(article.description || ''),
      id: crypto.randomUUID(),
    }));

    return {
      ...data,
      articles,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error');
  }
}
