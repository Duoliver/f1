import type DriverResult from '../common/DriverResult';

export default interface RaceDriverFastestLap extends DriverResult {
  lap: number;
}
