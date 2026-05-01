import type ComparableDriverResult from '../common/ComparableDriverResult';

export default interface RaceDriverFastestLap extends ComparableDriverResult {
  lap: number;
}
