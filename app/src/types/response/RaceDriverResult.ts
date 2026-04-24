import type DriverResult from '../common/DriverResult';

export default interface RaceDriverResult extends DriverResult {
  laps: number;
  sharedCar: boolean;
  timePenalty: string | null;
  timePenaltyMillis: number | null;
  gapLaps: number | null;
  reasonRetired: string | null;
  points: number | null;
  polePosition: boolean;
  qualificationPositionNumber: number;
  qualificationPositionText: string;
  gridPositionNumber: number;
  gridPositionText: string;
  positionsGained: number | null;
  pitStops: number;
  fastestLap: boolean;
  driverOfTheDay: boolean | null;
  grandSlam: boolean;
}
