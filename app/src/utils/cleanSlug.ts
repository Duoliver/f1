export default function cleanSlug(slug: string) {
  return slug.split('-').join(' ');
}
