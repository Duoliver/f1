import clearSlug from '~/utils/clearSlug';
import type GridDriverProps from './types';
import TyreManufacturerIndicator from './TyreManufacturerIndicator';
import { createContext, useContext } from 'react';

const GridDriverContext = createContext<GridDriverProps | null>(null);

function useGridDriverContext() {
  const gridDriverProps = useContext(GridDriverContext);

  if (!gridDriverProps) {
    throw new Error(
      'Component must be used inside of the GridDriverContext provider'
    );
  }

  return gridDriverProps;
}

export default function GridDriver(gridDriverProps: GridDriverProps) {
  return (
    <GridDriverContext.Provider value={gridDriverProps}>
      <div
        data-testid="grid-driver"
        className="grid grid-cols-[3.75rem_minmax(0,1fr)] sm:grid-rows-2 gap-2 min-[350px]:gap-x-2 min-[350px]:gap-y-0 text-start w-full mb-2 sm:mb-0"
      >
        <GridDriverPosition />
        <GridDriverName />
        <GridDriverCarInfo />
      </div>
    </GridDriverContext.Provider>
  );
}

function GridDriverPosition() {
  const { position } = useGridDriverContext();

  return (
    <div
      data-testid="grid-driver-position"
      className="row-span-2 flex items-center justify-center aspect-square bg-yellow w-[3.75rem]"
    >
      <h3 className="text-center text-black">{position || '-'}</h3>
    </div>
  );
}

function GridDriverName() {
  const { driverName } = useGridDriverContext();

  return (
    <h5 data-testid="grid-driver-name" className="text-white">
      {clearSlug(driverName)}
    </h5>
  );
}

function GridDriverCarInfo() {
  const { carNumber, constructor, engineManufacturer, tyreManufacturer } =
    useGridDriverContext();

  const fullConstructor =
    constructor === engineManufacturer
      ? clearSlug(constructor)
      : `${clearSlug(constructor)}-${clearSlug(engineManufacturer)}`;

  return (
    <div className="flex items-center col-start-1 row-start-3 col-span-2 min-[350px]:col-start-2 min-[350px]:row-start-2 gap-2">
      <span
        data-testid="grid-driver-number"
        className="flex items-center justify-center h6 font-bold text-black w-10 h-6 rounded-[100%] bg-cyan"
      >
        {carNumber}
      </span>
      <span
        data-testid="grid-driver-constructor"
        className="text-cyan text-xl uppercase"
      >
        {fullConstructor}
      </span>
      <div className="flex justify-end flex-1 sm:flex-0">
        <TyreManufacturerIndicator tyreManufacturer={tyreManufacturer} />
      </div>
    </div>
  );
}
