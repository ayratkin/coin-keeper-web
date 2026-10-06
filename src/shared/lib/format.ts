const moneyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

const dayFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
});

const monthFormatter = new Intl.DateTimeFormat("ru-RU", {
  month: "long",
  year: "numeric",
});

export const formatMoney = (value: number) => moneyFormatter.format(value);

export const formatDay = (isoDate: string) =>
  dayFormatter.format(new Date(isoDate));

export const formatMonth = (date: Date) => {
  const label = monthFormatter.format(date).replace(" г.", "");
  return label.charAt(0).toUpperCase() + label.slice(1);
};

export const formatPercent = (part: number, total: number) =>
  total > 0 ? `${Math.round((part / total) * 100)}%` : "0%";
