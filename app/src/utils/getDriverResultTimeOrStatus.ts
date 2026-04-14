import type RaceDriverResult from '../types/response/RaceDriverResult';

export default function getDriverResultTimeOrStatus(
  driverResult: RaceDriverResult
) {
  return (
    driverResult.time || driverResult.gap || driverResult.reasonRetired || '-'
  );
}
