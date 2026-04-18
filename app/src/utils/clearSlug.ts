export default function clearSlug(slug: string) {
  return slug.split('-').join(' ');
}
