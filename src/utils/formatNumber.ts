const formatter = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 0,
});

export function formatNumber(value: number) {
  return formatter.format(value);
}
