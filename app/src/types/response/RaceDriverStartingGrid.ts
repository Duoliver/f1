import type DriverResult from '../common/DriverResult';

export default interface RaceDriverStartingGrid extends DriverResult {
  gridPenalty: string | null;
  gridPenaltyPositions: number | null;
  qualificationPositionNumber: number | null;
  qualificationPositionText: string | null;
}
