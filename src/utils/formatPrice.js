export const formatPrice = (amount, currency = '₦') => {
  if (!amount) return 'Price on Request';
  if (amount >= 1_000_000_000)
    return `${currency}${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000)
    return `${currency}${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000)
    return `${currency}${(amount / 1_000).toFixed(0)}K`;
  return `${currency}${amount.toLocaleString('en-NG')}`;
};
