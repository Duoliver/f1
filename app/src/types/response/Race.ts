import type QualifyingDriverResult from './QualifyingDriverResult';
import type RaceDriverFastestLap from './RaceDriverFastestLap';
import type RaceDriverResult from './RaceDriverResult';
import type RaceDriverStartingGrid from './RaceDriverStartingGrid';

export default interface Race {
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
  circuitId: string;
  officialName: string;
  qualifyingFormat:
    | 'ONE_SESSION'
    | 'TWO_SESSION'
    | 'ONE_LAP'
    | 'KNOCKOUT'
    | 'ELIMINATION'
    | 'SPRINT_RACE';
  laps: number;
  qualifyingResults: QualifyingDriverResult[] | null;
  startingGridPositions: RaceDriverStartingGrid[] | null;
  raceResults: RaceDriverResult[] | null;
  fastestLaps: RaceDriverFastestLap[] | null;
}
