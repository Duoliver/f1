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

  if (isLoading)
    return {
      race: null,
      tableData: null,
    };

  const race = races.find((race) => race.grandPrixId === grandPrix);

  if (!race) {
    throw new Error(`No grand prix of ${grandPrix} found for season ${season}`);
  }

  const tableData: RaceDriverFullResult[] | undefined = useMemo(
    () =>
      race?.raceResults.map((res) => {
        return {
          raceResult: res,
          fastestLap: race.fastestLaps?.find(
            (fl) => fl.driverId === res.driverId
          ),
        };
      }),
    [race]
  );

  return { race, tableData };
}
