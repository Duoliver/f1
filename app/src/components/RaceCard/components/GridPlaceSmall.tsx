import cleanSlug from '../../../utils/cleanSlug';
import getDriverResultTimeOrStatus from '../../../utils/getDriverResultTimeOrStatus';
import type { GridPlaceSmallProps } from '../types';

export default function GridPlaceSmall({ driverResult }: GridPlaceSmallProps) {
  return (
    <div className="flex gap-1">
      <span className="flex items-center justify-center text-center aspect-square h-9 bg-yellow">
        <h5 className="text-black">{driverResult.positionNumber}</h5>
      </span>
      <div>
        <h6 className="uppercase">{cleanSlug(driverResult.driverId)}</h6>
        <p className="p-0 text-yellow uppercase">
          {getDriverResultTimeOrStatus(driverResult)}
        </p>
      </div>
    </div>
  );
}
