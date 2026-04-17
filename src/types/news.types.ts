export type TNewsCategory =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export interface IFetchNewsParams {
  country: string;
  category: TNewsCategory;
  pageSize: number;
}

export type TNewsApiResponse =
  | {
      status: 'ok';
      totalResults: number;
      articles: INewsArticle[];
    }
  | {
      status: 'error';
      message: string;
    };

export interface INewsArticle {
  url: string | null;
  urlToImage: string;
  title: string | null;
  description: string | null;
  id: string;
}
