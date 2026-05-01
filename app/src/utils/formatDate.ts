const dateFormatter = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});

const dateFormatterFull = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export default function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

export function formatFullDate(date: string) {
  return dateFormatterFull.format(new Date(date));
}
