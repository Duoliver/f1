import { useMemo } from 'react';
import useRaces from '~/api/hooks/useRaces';
import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';
import type UseSeasonGrandPrixProps from './types';

export default function useSeasonGrandPrix({
  season,
  grandPrix,
}: UseSeasonGrandPrixProps) {
  const { races, isLoading } = useRaces({
    year: Number(season),
  });

  const race = races.find((race) => race.grandPrixId === grandPrix);

  if (!race && !isLoading) {
    throw new Error(`No grand prix of ${grandPrix} found for season ${season}`);
  }

  const raceResults: RaceDriverFullResult[] = useMemo(() => {
    if (!race || !race?.raceResults) return [];
    return race?.raceResults.map((res) => ({
      raceResult: res,
      fastestLap: race.fastestLaps?.find((fl) => fl.driverId === res.driverId),
    }));
  }, [race]);

  return { race, raceResults };
}
