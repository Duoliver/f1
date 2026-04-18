import cleanSlug from '../../../../../../utils/cleanSlug';

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
      ? cleanSlug(constructor)
      : `${cleanSlug(constructor)}-${cleanSlug(engineManufacturer)}`;

  return (
    <>
      <span data-testid="grid-driver-position">{position || '-'}</span>
      <h4 data-testid="grid-driver-name">{cleanSlug(driverName)}</h4>
      <div>
        <span data-testid="grid-driver-number">{carNumber}</span>
        <span data-testid="grid-driver-constructor">{fullConstructor}</span>
        <span
          data-testid="grid-driver-tyre-manufacturer"
          title={capitalize(tyreManufacturer)}
        >
          {tyreManufacturer[0]}
        </span>
      </div>
    </>
  );
}

function capitalize(string: string) {
  const [initial, ...rest] = string;
  return initial.toUpperCase() + rest.join('');
}
