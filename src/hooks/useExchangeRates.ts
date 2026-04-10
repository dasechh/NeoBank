import { fetchCurrency } from '@/services';
import type { ICurrenciesParams, IExchangeRatesProps } from '@/types';
import { useState, useEffect } from 'react';
import { msIn15Minutes, msInMinute } from '@/constants';

export function useExchangeRates(currencies: ICurrenciesParams): IExchangeRatesProps {
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [date, setDate] = useState<string>('');

  async function loadRates() {
    try {
      const data = await fetchCurrency(currencies);
      if (data.result === 'error') {
        throw new Error(data['error-type'] || 'Failed to fetch exchange rates');
      }
      setRates(data.conversion_rates || null);
      setDate(new Date().toLocaleDateString());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadRates();
    const interval = setInterval(loadRates, msIn15Minutes);
    return () => clearInterval(interval);
  }, []);

  return { rates, date, updateInterval: msIn15Minutes / msInMinute };
}
