import type RaceFilter from '~/types/request/RaceFilter';
import type Race from '~/types/response/Race';
import get from '../get';

export default async function getRaces(filter?: RaceFilter): Promise<Race[]> {
  return get<Race>('races', filter);
}
