import { useQuery } from '@tanstack/react-query';
import getSeasons from '../services/seasons';
import type SeasonFilter from '../../types/request/SeasonFilter';

export default function useSeasons(filter?: SeasonFilter) {
  const { data = [] } = useQuery({
    // TODO: test it 'cause I can't be sure this query keying works this way with objects
    queryKey: ['seasons', filter],
    queryFn: () => getSeasons(filter),
  });

  return { seasons: data };
}
