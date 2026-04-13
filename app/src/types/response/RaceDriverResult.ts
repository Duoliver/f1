import type DriverResult from '../common/DriverResult';

export default interface RaceDriverResult extends DriverResult {
  sharedCar: boolean;
  timePenalty: string;
  timePenaltyMillis: number;
  gapLaps: number;
  reasonRetired: string;
  points: number;
  polePosition: boolean;
  qualificationPositionNumber: number;
  qualificationPositionText: string;
  gridPositionNumber: number;
  gridPositionText: string;
  positionsGained: number;
  pitStops: number;
  fastestLap: boolean;
  driverOfTheDay: boolean | null;
  grandSlam: boolean;
}
