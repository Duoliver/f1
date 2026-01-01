const BASE_API_URL = 'http://localhost:3000/';

export default async function get(resource: string) {
  const response = await fetch(`${BASE_API_URL}${resource}`);
  return response.json();
}
