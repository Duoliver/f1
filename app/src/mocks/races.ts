import type Race from '~/types/response/Race';
import raceResults, {
  noGapOrReasonRetiredThirdDriver,
  nonClassifiedDriver,
  retiredThirdDriver,
  thirdDriver,
} from './raceDriverResults';
import fastestLaps from './raceFastestLaps';
import startingGridPositions from './raceStartingGrid';

export const raceOne: Race = {
  year: 2002,
  round: 1,
  date: '2002-04-06',
  grandPrixId: 'italy',
  circuitId: 'monza',
  officialName: "Gran Premio Vodafone d'Italia 2002",
  qualifyingFormat: 'KNOCKOUT',
  laps: 45,
  qualifyingResults: [],
  startingGridPositions,
  raceResults: [...raceResults, thirdDriver],
  fastestLaps,
};

export const raceTwo: Race = {
  year: 2002,
  round: 2,
  date: '2002-04-30',
  grandPrixId: 'great-britain',
  circuitId: 'brands-hatch',
  officialName: "2002 Foster's British Grand Prix",
  qualifyingFormat: 'KNOCKOUT',
  laps: 1,
  qualifyingResults: [],
  startingGridPositions,
  raceResults: [...raceResults, retiredThirdDriver],
  fastestLaps: null,
};

export const raceThree: Race = {
  year: 2002,
  round: 3,
  date: '2002-05-21',
  grandPrixId: 'monaco',
  circuitId: 'monaco',
  officialName: 'Grand Prix de Monaco 2002',
  qualifyingFormat: 'KNOCKOUT',
  laps: 50,
  qualifyingResults: [],
  startingGridPositions,
  raceResults: [...raceResults, noGapOrReasonRetiredThirdDriver],
  fastestLaps,
};

export const raceFour: Race = {
  year: 2002,
  round: 4,
  date: '2002-05-29',
  grandPrixId: 'san-marino',
  circuitId: 'imola-clockwise',
  officialName: 'Gran Premio di San Marino 2002',
  qualifyingFormat: 'KNOCKOUT',
  laps: 60,
  qualifyingResults: [],
  startingGridPositions,
  raceResults: [...raceResults, nonClassifiedDriver],
  fastestLaps,
};

export const raceFive: Race = {
  year: 2002,
  round: 5,
  date: '2002-06-05',
  grandPrixId: 'malaysia',
  circuitId: 'sepang',
  officialName: 'Petronas Formula One Malaysia Grand Prix 2002',
  qualifyingFormat: 'KNOCKOUT',
  laps: 55,
  qualifyingResults: null,
  startingGridPositions: null,
  raceResults: null,
  fastestLaps: null,
};

const racesMock = (): Promise<Race[]> =>
  Promise.resolve([raceOne, raceTwo, raceThree, raceFour, raceFive]);

export default racesMock;
