export function normalizeNumber(value: unknown, min = -Infinity, max = Infinity): number {
  const num = Number(value);

  if (isNaN(num)) return min;

  return Math.min(max, Math.max(min, num));
}
