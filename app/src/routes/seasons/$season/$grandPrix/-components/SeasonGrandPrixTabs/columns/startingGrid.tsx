import { createColumnHelper } from '@tanstack/react-table';
import GridDriver from '../../GridDriver';
import type RaceDriverStartingGrid from '~/types/response/RaceDriverStartingGrid';

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

export default startingGridColumns;
