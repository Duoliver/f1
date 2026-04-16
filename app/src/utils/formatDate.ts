const dateFormatter = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});

export default function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}
