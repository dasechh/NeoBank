import axios, { type AxiosResponse } from 'axios';

export async function getData<TResponse, TParams = undefined>(
  endpoint: string,
  params?: TParams,
): Promise<AxiosResponse<TResponse>> {
  return axios.get(endpoint, {
    params,
    timeout: 7000,
  });
}
