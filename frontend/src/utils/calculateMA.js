export function calculateMA(priceHistory, days) {
  if (!Array.isArray(priceHistory) || priceHistory.length === 0) {
    return null;
  }

  if (priceHistory.length < days) {
    return null;
  }

  const recentPrices = priceHistory.slice(-days);

  const total = recentPrices.reduce((sum, price) => {
    return sum + price;
  }, 0);

  return total / days;
}