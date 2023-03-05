export const formatCurrency = (amt: number) =>
  amt.toLocaleString(undefined, { style: "currency", currency: "USD" });

export const formatPercentage = (amt: number) =>
  amt.toLocaleString(undefined, { style: "percent", minimumFractionDigits: 0 });
