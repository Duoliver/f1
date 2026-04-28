import { createColumnHelper, type CellContext } from '@tanstack/react-table';
import GridDriver from '../-components/GridDriver';
import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';

const columnHelper = createColumnHelper<RaceDriverFullResult>();

const seasonGrandPrixColumns = [
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

export default seasonGrandPrixColumns;
