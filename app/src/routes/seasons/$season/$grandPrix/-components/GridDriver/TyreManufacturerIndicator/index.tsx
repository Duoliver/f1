import capitalize from '~/utils/capitalize';
import type { TyreManufacturerIndicatorProps } from '../types';
import { getTyreManufacturerClassName } from './utils';

export default function TyreManufacturerIndicator({
  tyreManufacturer,
}: TyreManufacturerIndicatorProps) {
  return (
    <span
      data-testid="grid-driver-tyre-manufacturer"
      title={capitalize(tyreManufacturer)}
      className={`
        flex items-center justify-center
        h6 font-bold capitalize
        border
        aspect-square h-6 rounded-full
        hover:cursor-help
        ${getTyreManufacturerClassName(tyreManufacturer)}
      `}
    >
      {tyreManufacturer[0]}
    </span>
  );
}
