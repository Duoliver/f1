import clearSlug from '~/utils/clearSlug';
import type GridDriverProps from './types';
import TyreManufacturerIndicator from './TyreManufacturerIndicator';

export default function GridDriver({
  position,
  driverName,
  carNumber,
  constructor,
  engineManufacturer,
  tyreManufacturer,
}: GridDriverProps) {
  const fullConstructor =
    constructor === engineManufacturer
      ? clearSlug(constructor)
      : `${clearSlug(constructor)}-${clearSlug(engineManufacturer)}`;

  return (
    <div className="grid grid-cols-[3.75rem_minmax(0,1fr)] grid-rows-2 gap-x-2 gap-y-0">
      <div
        data-testid="grid-driver-position"
        className="row-span-2 flex items-center justify-center aspect-square bg-yellow w-[3.75rem]"
      >
        <h3 className="text-center text-black">{position || '-'}</h3>
      </div>
      <h5 data-testid="grid-driver-name">{clearSlug(driverName)}</h5>
      <div className="col-start-2 row-start-2 flex items-center gap-2">
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
        <TyreManufacturerIndicator tyreManufacturer={tyreManufacturer} />
      </div>
    </div>
  );
}
