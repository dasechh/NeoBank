import axios, { type AxiosResponse } from 'axios';

export async function getData<T>(endpoint: string, params?: T): Promise<AxiosResponse> {
  return axios.get(endpoint, {
    params,
    timeout: 7000,
  });
}
