import Tabs from '~/components/Tabs';
import useSeasonGrandPrixContext from '../../-context/useSeasonGrandPrixContext';
import Table from '~/components/Table';
import type RaceDriverStartingGrid from '~/types/response/RaceDriverStartingGrid';
import startingGridColumns from './columns/startingGrid';
import raceResultColumns from './columns/raceResults';
import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';

export default function SeasonGrandPrixTabs() {
  const { race, raceResults } = useSeasonGrandPrixContext();

  return (
    <Tabs
      tabs={[
        {
          title: 'Starting Grid',
          content: (
            <div className="flex flex-col gap-4 w-full">
              <h2 className="uppercase text-center">Starting Grid</h2>
              <Table<RaceDriverStartingGrid>
                columns={startingGridColumns}
                data={race?.startingGridPositions || []}
              />
            </div>
          ),
        },
        {
          title: 'Race Results',
          content: (
            <div className="flex flex-col gap-4 w-full">
              <h2 className="uppercase text-center">
                Race classification after {race?.laps}{' '}
                {race?.laps === 1 ? 'lap' : 'laps'}
              </h2>
              <Table<RaceDriverFullResult>
                columns={raceResultColumns}
                data={raceResults}
              />
            </div>
          ),
        },
      ]}
    />
  );
}
