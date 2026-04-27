import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';
import { createColumnHelper, type CellContext } from '@tanstack/react-table';
import Table from '~/components/Table';
import GridDriver from './-components/GridDriver';
import useRaces from '~/api/hooks/useRaces';
import SeasonGrandPrixPageHeader from './-components/SeasonGrandPrixPageHeader';
import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';
import { useMemo } from 'react';

export const Route = createFileRoute('/seasons/$season/$grandPrix/')({
  component: SeasonGrandPrixPage,
});

function SeasonGrandPrixPage() {
  const { season, grandPrix } = Route.useParams();
  const { races, isLoading } = useRaces({
    year: Number(season),
  });

  if (isLoading) return 'loading...';

  const race = races.find((race) => race.grandPrixId === grandPrix);

  if (!race) {
    throw new Error(`No grand prix of ${grandPrix} found for season ${season}`);
  }

  const data: RaceDriverFullResult[] = useMemo(
    () =>
      race.raceResults.map((res) => {
        return {
          raceResult: res,
          fastestLap: race.fastestLaps.find(
            (fl) => fl.driverId === res.driverId
          ),
        };
      }),
    [race]
  );

  return (
    <PageLayout title={race.officialName}>
      <main className="flex flex-col gap-16 w-full">
        <SeasonGrandPrixPageHeader
          round={race.round}
          circuitName={race.circuitId}
          date={race.date}
        />
        <div className="flex flex-col gap-4 w-full">
          <h2 className="uppercase text-center">
            Race classification after {race.laps}{' '}
            {race.laps === 1 ? 'lap' : 'laps'}
          </h2>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </PageLayout>
  );
}

// export columns from a sibling file.
const columnHelper = createColumnHelper<RaceDriverFullResult>();

const columns = [
  columnHelper.accessor('raceResult.positionNumber', {
    header: '',
    cell: ({
      getValue,
      row: {
        original: { raceResult },
      },
    }) => (
      <GridDriver
        position={getValue()}
        driverName={raceResult.driverId}
        carNumber={raceResult.driverNumber}
        constructor={raceResult.constructorId}
        engineManufacturer={raceResult.engineManufacturerId}
        tyreManufacturer={raceResult.tyreManufacturerId}
        key={raceResult.driverId}
      />
    ),
  }),
  columnHelper.accessor('fastestLap.time', {
    header: 'Best Lap',
    cell: ({ getValue }) => getValue() || '-',

    meta: {
      textAlign: 'center',
      getCellContext: (context: CellContext<RaceDriverFullResult, unknown>) => {
        if (context.row.original.raceResult.fastestLap) {
          return {
            className: 'text-purple',
          };
        }
      },
    },
  }),
  columnHelper.accessor('raceResult.laps', {
    header: 'Laps',
    cell: ({ getValue }) => getValue() || '-',
    meta: {
      textAlign: 'center',
    },
  }),
  columnHelper.accessor('raceResult.time', {
    header: 'Race Time',
    cell: ({
      getValue,
      row: {
        original: { raceResult },
      },
    }) =>
      raceResult.positionNumber === 1
        ? getValue()
        : raceResult.gap ||
          raceResult.reasonRetired ||
          raceResult.positionText ||
          '-',
    meta: {
      textAlign: 'right',
    },
  }),
];
