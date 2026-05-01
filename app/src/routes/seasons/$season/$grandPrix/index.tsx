import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';
import Table from '~/components/Table';
import SeasonGrandPrixPageHeader from './-components/SeasonGrandPrixPageHeader';
import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';
import useSeasonGrandPrix from './-hooks/useSeasonGrandPrix';
import columns from './-columns';
import Tabs from '~/components/Tabs';
import type RaceDriverStartingGrid from '~/types/response/RaceDriverStartingGrid';
import { createColumnHelper } from '@tanstack/react-table';
import GridDriver from './-components/GridDriver';

export const Route = createFileRoute('/seasons/$season/$grandPrix/')({
  component: SeasonGrandPrixPage,
});

function SeasonGrandPrixPage() {
  const { season, grandPrix } = Route.useParams();
  const { race, tableData } = useSeasonGrandPrix({
    season,
    grandPrix,
  });

  return (
    <PageLayout title={race?.officialName || ''}>
      <main className="flex flex-col gap-16 w-full">
        <SeasonGrandPrixPageHeader
          round={race?.round}
          circuitName={race?.circuitId}
          date={race?.date}
        />
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
                    columns={columns}
                    data={tableData}
                  />
                </div>
              ),
            },
          ]}
        />
      </main>
    </PageLayout>
  );
}

const columnHelper = createColumnHelper<RaceDriverStartingGrid>();

const startingGridColumns = [
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
  columnHelper.accessor('time', {
    header: 'Time',
    cell: ({ getValue, row: { original } }) => {
      if (
        original.qualificationPositionText &&
        !original.qualificationPositionNumber
      ) {
        return original.qualificationPositionText;
      }
      if (original.positionText && !original.positionNumber) {
        return original.positionText;
      }
      return getValue() || '-';
    },
    meta: {
      textAlign: 'right',
    },
  }),
];
