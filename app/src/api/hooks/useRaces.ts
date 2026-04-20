import { useQuery } from '@tanstack/react-query';
import getRaces from '../services/races';
import type RaceFilter from '../../types/request/RaceFilter';

export default function useRaces(filter?: RaceFilter) {
  const { data = [], isLoading } = useQuery({
    queryKey: ['races', filter],
    queryFn: () => getRaces(filter),
  });

  return { races: data, isLoading };
}
