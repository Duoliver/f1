import type SeasonFilter from '../../../types/request/SeasonFilter';
import type Season from '../../../types/response/Season';
import get from '../get';

export default async function getSeasons(
  filter?: SeasonFilter
): Promise<Season[]> {
  return get<Season>(`seasons`, filter);
}
