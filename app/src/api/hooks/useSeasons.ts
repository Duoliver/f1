import { useQuery } from '@tanstack/react-query';
import getSeasons from '../services/seasons';

export default function useSeasons() {
  const { data = [] } = useQuery({
    queryKey: ['seasons'],
    queryFn: getSeasons,
  });

  return { seasons: data };
}
