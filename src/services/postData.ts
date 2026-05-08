import axios, { type AxiosResponse } from 'axios';

export async function postData<T>(endpoint: string, data: T): Promise<AxiosResponse> {
  return await axios.post(endpoint, data, {
    timeout: 7000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}
