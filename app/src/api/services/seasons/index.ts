import type Season from '../../../types/response/Season';
import get from '../get';

export default async function getSeasons(): Promise<Season[]> {
  return get(`seasons`);
}
