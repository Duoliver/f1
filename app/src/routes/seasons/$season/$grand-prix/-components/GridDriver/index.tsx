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
      <h4 data-testid="grid-driver-name">{clearSlug(driverName)}</h4>
      <div className="col-start-2 row-start-2 flex items-center gap-2">
        <span
          data-testid="grid-driver-number"
          className="flex items-center justify-center h5 text-black w-12 h-7 rounded-[100%] bg-cyan"
        >
          {carNumber}
        </span>
        <span
          data-testid="grid-driver-constructor"
          className="text-cyan text-2xl uppercase"
        >
          {fullConstructor}
        </span>
        <span
          data-testid="grid-driver-tyre-manufacturer"
          title={capitalize(tyreManufacturer)}
        >
          {tyreManufacturer[0]}
        </span>
      </div>
    </div>
  );
}

function capitalize(string: string) {
  const [initial, ...rest] = string;
  return initial.toUpperCase() + rest.join('');
}
