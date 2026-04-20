import clearSlug from '../../../../../../utils/clearSlug';

interface GridDriverProps {
  position: number | null;
  driverName: string;
  carNumber: string;
  constructor: string;
  engineManufacturer: string;
  tyreManufacturer: string;
}

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

interface TyreManufacturerIndicatorProps {
  tyreManufacturer: string;
}

function TyreManufacturerIndicator({
  tyreManufacturer,
}: TyreManufacturerIndicatorProps) {
  return (
    <span
      data-testid="grid-driver-tyre-manufacturer"
      title={capitalize(tyreManufacturer)}
      className={`flex items-center border justify-center h6 font-bold capitalize aspect-square h-6 rounded-full ${getTyreManufacturerClassName(tyreManufacturer)}`}
    >
      {tyreManufacturer[0]}
    </span>
  );
}

const YELLOW_TYRES = ['continental', 'dunlop', 'pirelli'];
const RED_TYRES = ['avon', 'bridgestone', 'firestone'];
const BLUE_TYRES = ['englebert', 'goodyear', 'michelin'];

function getTyreManufacturerClassName(tyreManufacturer: string) {
  if (YELLOW_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-yellow border-full-black text-full-black';
  }
  if (RED_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-red border-white text-white';
  }
  if (BLUE_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-blue border-white text-white';
  }
}

function capitalize(string: string) {
  const [initial, ...rest] = string;
  return initial.toUpperCase() + rest.join('');
}
