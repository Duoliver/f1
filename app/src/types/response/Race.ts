import type QualifyingDriverResult from './QualifyingDriverResult';
import type RaceDriverResult from './RaceDriverResult';

export default interface Race {
  year: number;
  round: number;
  date: string;
  grandPrixId: string;
  circuitId: string;
  qualifyingResults: QualifyingDriverResult[];
  raceResults: RaceDriverResult[];
}
