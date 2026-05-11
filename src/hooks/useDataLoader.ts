import { getData, postData, putData } from '@/services';
import type { AxiosResponse } from 'axios';
import { useState } from 'react';

type TDataOptions =
  | {
      method: 'GET';
      endpoint: string;
    }
  | {
      method: 'POST' | 'PUT';
      endpoint: string;
    };

export function useDataLoader<T>(options: TDataOptions) {
  const [responseLoading, setResponseLoading] = useState(false);
  const [responseError, setResponseError] = useState<unknown | null>(null);
  const [responseData, setResponseData] = useState<AxiosResponse<T> | null>(null);

  const serverResponse = async (payload: T): Promise<void> => {
    try {
      setResponseLoading(true);
      let response: AxiosResponse<T>;
      switch (options.method) {
        case 'GET':
          response = await getData<T>(options.endpoint, payload);
          break;
        case 'POST':
          response = await postData<T>(options.endpoint, payload);
          break;
        case 'PUT':
          response = await putData<T>(options.endpoint, payload);
          break;
        default:
          throw new Error('Invalid method');
      }
      setResponseData(response);
      setResponseError(null);
    } catch (error) {
      setResponseError(error);
      setResponseData(null);
      throw error;
    } finally {
      setResponseLoading(false);
    }
  };

  return {
    responseLoading,
    responseError,
    responseData,
    serverResponse,
  };
}
