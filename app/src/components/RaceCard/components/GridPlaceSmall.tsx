import clearSlug from '../../../utils/clearSlug';
import getDriverResultTimeOrStatus from '../../../utils/getDriverResultTimeOrStatus';
import type { GridPlaceSmallProps } from '../types';

export default function GridPlaceSmall({ driverResult }: GridPlaceSmallProps) {
  return (
    <div className="flex gap-1">
      <span className="flex items-center justify-center text-center aspect-square h-9 bg-yellow">
        <h5 className="text-black">{driverResult.positionNumber}</h5>
      </span>
      <div className="flex flex-col gap-1">
        <h6
          className="uppercase"
          data-testid={`race-card-driver-${driverResult.positionNumber}-name`}
        >
          {clearSlug(driverResult.driverId)}
        </h6>
        <p
          className="p-0 text-yellow uppercase"
          data-testid={`race-card-driver-${driverResult.positionNumber}-result-time`}
        >
          {getDriverResultTimeOrStatus(driverResult)}
        </p>
      </div>
    </div>
  );
}
