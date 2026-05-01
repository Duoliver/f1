import type DriverResult from './DriverResult';

export default interface ComparableDriverResult extends DriverResult {
  gap: string | null;
  gapMillis: number | null;
  interval: string | null;
  intervalMillis: number | null;
}
