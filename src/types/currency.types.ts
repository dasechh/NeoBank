export interface ICurrenciesParams {
  from: string;
  to?: string[];
}

export type ICurrenciesRates =
  | {
      result: 'success';
      conversion_rates: Record<string, number>;
    }
  | {
      result: 'error';
      'error-type': string;
    };

export interface IExchangeRatesProps {
  rates: Record<string, number> | null;
  date: string;
  updateInterval: number;
}
