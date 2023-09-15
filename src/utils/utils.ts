//Date
const formatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export const getFormattedDate = (date: Date) => formatter.format(date);
