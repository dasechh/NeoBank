export function normalizeRate(rate: number): number {
  return Number((1 / rate).toFixed(2));
}
