import axios from 'axios';
import { currencyExchangeApiKey, currencyExchangeUrl } from '~/config';


export interface ICurrenciesParams {
  from: string;
  to?: string[];
}

interface ICurrenciesRates {
  result: 'success' | 'error';
  documentation?: string;
  terms_of_use?: string;
  time_last_update_unix?: number;
  time_last_update_utc?: string;
  time_next_update_unix?: number;
  time_next_update_utc?: string;
  base_code?: string;
  conversion_rates?: Record<string, number>;
  'error-type'?: string;
}

export async function fetchCurrency({ from, to }: ICurrenciesParams): Promise<ICurrenciesRates> {
  try {
    const response = await axios.get<ICurrenciesRates>(`${currencyExchangeUrl}/${from}`);
    const data = response.data;

    if (data.result === 'error') {
      throw new Error(data['error-type'] || 'Unknown API error');
    }

    const rates = data.conversion_rates || {};
    if (to) {
      const filteredRates: Record<string, number> = {};
      to.forEach((currency) => {
        if (currency in rates) {
          filteredRates[currency] = rates[currency];
        }
      });
      data.conversion_rates = filteredRates;
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error');
  }
}
