import type QualifyingDriverResult from './QualifyingDriverResult';
import type RaceDriverFastestLap from './RaceDriverFastestLap';
import type RaceDriverResult from './RaceDriverResult';

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
  qualifyingResults: QualifyingDriverResult[];
  raceResults: RaceDriverResult[];
  fastestLaps: RaceDriverFastestLap[] | null;
}
