import axios from 'axios';
import { currencyExchangeUrl } from '@/constants';
import { normalizeRate } from '@/utils';
import type { ICurrenciesParams, ICurrenciesRates } from '@/types';

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
          filteredRates[currency] = normalizeRate(rates[currency]);
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
