import axios from 'axios';

const xRapidApiKey = 'de46a04d9emsh821a21a80aa53c0p139786jsn653edd650823';
const xRapidApiHost = 'currency-converter-pro1.p.rapidapi.com';
const fetchCurrencyUrl = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates';

export interface ICurrencyParams {
  from: string;
  to: string;
}

export interface ICurrencyRates {
  success: boolean;
  timestamp: number;
  date: string;
  base: string;
  result: Record<string, number>;
}

export async function fetchCurrency({ from, to }: ICurrencyParams): Promise<ICurrencyRates> {
  try {
    const options = {
      method: 'GET',
      url: fetchCurrencyUrl,
      params: {
        base: from,
        currencies: to,
      },
      headers: {
        'x-rapidapi-key': xRapidApiKey,
        'x-rapidapi-host': xRapidApiHost,
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.request<ICurrencyRates>(options);
    return response.data;
  } catch (error: unknown) {
    throw new Error(String(error));
  }
}
