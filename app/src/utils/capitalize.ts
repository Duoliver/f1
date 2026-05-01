export default function capitalize(string: string) {
  const [initial, ...rest] = string;
  return initial.toUpperCase() + rest.join('');
}
