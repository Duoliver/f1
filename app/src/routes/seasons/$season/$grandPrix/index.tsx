import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';
import type RaceDriverResult from '~/types/response/RaceDriverResult';
import { createColumnHelper } from '@tanstack/react-table';
import Table from '~/components/Table';
import GridDriver from './-components/GridDriver';
import useRaces from '~/api/hooks/useRaces';
import SeasonGrandPrixPageHeader from './-components/SeasonGrandPrixPageHeader';

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

  const data: RaceDriverResult[] = [];

  return (
    <PageLayout title={race.officialName}>
      <main className="flex flex-col gap-4 w-full">
        <SeasonGrandPrixPageHeader
          round={race.round}
          circuitName={race.circuitId}
          date={race.date}
        />
        <Table columns={columns} data={data} />
      </main>
    </PageLayout>
  );
}

// export columns from a sibling file.
const columnHelper = createColumnHelper<RaceDriverResult>();

const columns = [
  columnHelper.accessor('positionNumber', {
    header: '',
    cell: ({ getValue, row: { original } }) => (
      <GridDriver
        position={getValue()}
        driverName={original.driverId}
        carNumber={original.driverNumber}
        constructor={original.constructorId}
        engineManufacturer={original.engineManufacturerId}
        tyreManufacturer={original.tyreManufacturerId}
        key={original.driverId}
      />
    ),
  }),
  columnHelper.accessor('fastestLap', {
    header: 'Best Lap',
    cell: (/*{ row: { original } }*/) =>
      // fastestLaps.find((fl) => original.driverId === fl.driverId)?.time ||
      '-',
    meta: {
      textAlign: 'center',
    },
  }),
  columnHelper.accessor('laps', {
    header: 'Laps',
    cell: (info) => info.getValue() || '-',
    meta: {
      textAlign: 'center',
    },
  }),
  columnHelper.accessor('time', {
    header: 'Race Time',
    cell: ({ getValue, row: { original } }) =>
      original.positionNumber === 1
        ? getValue()
        : original.gap || original.reasonRetired || '-',
    meta: {
      textAlign: 'right',
    },
  }),
];
