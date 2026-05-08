import axios, { type AxiosResponse } from 'axios';

export async function putData<T>(endpoint: string, data: T): Promise<AxiosResponse> {
  return await axios.put(endpoint, data, { timeout: 7000 });
}
