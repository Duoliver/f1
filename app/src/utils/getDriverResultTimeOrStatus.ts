import type RaceDriverResult from '../types/response/RaceDriverResult';

export default function getDriverResultTimeOrStatus(
  driverResult: RaceDriverResult
) {
  if (driverResult.positionNumber === 1) return driverResult.time;
  return driverResult.gap || driverResult.reasonRetired || '-';
}
