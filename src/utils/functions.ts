export function formatCurrency(
  value: number,
  locale: string = 'en-US',
  currency: string = 'USD'
  //'es-PE', 'PEN'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}