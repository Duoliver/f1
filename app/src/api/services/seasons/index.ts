import type SeasonFilter from '../../../types/request/SeasonFilter';
import type Season from '../../../types/response/Season';
import get from '../get';

export default async function getSeasons(
  filter?: SeasonFilter
): Promise<Season[]> {
  // TODO: fix the fact it's bitching that Season requires "year" while SeasonFilter does not.
  return get<Season>(`seasons`, filter);
}
