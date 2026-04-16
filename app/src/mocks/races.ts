import type Race from '../types/response/Race';
import type RaceDriverResult from '../types/response/RaceDriverResult';

const raceUnusedAttributes = {
  positionDisplayOrder: 1,
  positionText: '1',
  sharedCar: false,
  timeMillis: 5505015,
  timePenalty: null,
  timePenaltyMillis: null,
  gapMillis: null,
  gapLaps: null,
  interval: null,
  intervalMillis: null,
  points: 10,
  polePosition: false,
  qualificationPositionNumber: 3,
  qualificationPositionText: '3',
  gridPositionNumber: 3,
  gridPositionText: '3',
  positionsGained: 2,
  pitStops: 3,
  fastestLap: false,
  driverOfTheDay: null,
  grandSlam: false,
};

const raceResults: RaceDriverResult[] = [
  {
    positionNumber: 1,
    driverNumber: '1',
    driverId: 'driver-one',
    constructorId: 'ferrari',
    engineManufacturerId: 'ferrari',
    tyreManufacturerId: 'bridgestone',
    laps: 60,
    time: '1:30:00.000',
    gap: null,

    reasonRetired: null,
    ...raceUnusedAttributes,
  },
  {
    positionNumber: 2,
    driverNumber: '2',
    driverId: 'driver-two',
    constructorId: 'ferrari',
    engineManufacturerId: 'ferrari',
    tyreManufacturerId: 'bridgestone',
    laps: 60,
    time: '1:30:10.000',
    gap: '+10.000',
    reasonRetired: null,
    ...raceUnusedAttributes,
  },
];

const thirdDriver: RaceDriverResult = {
  positionNumber: 3,
  driverNumber: '6',
  driverId: 'driver-three',
  constructorId: 'williams',
  engineManufacturerId: 'bmw',
  tyreManufacturerId: 'michelin',
  laps: 60,
  time: '1:30:20.000',
  gap: '+20.000',
  reasonRetired: null,
  ...raceUnusedAttributes,
};

const retiredThirdDriver: RaceDriverResult = {
  positionNumber: 3,
  driverNumber: '6',
  driverId: 'driver-three',
  constructorId: 'williams',
  engineManufacturerId: 'bmw',
  tyreManufacturerId: 'michelin',
  laps: 59,
  time: null,
  gap: null,
  reasonRetired: 'Out of fuel',
  ...raceUnusedAttributes,
};

const noGapOrReasonRetiredThirdDriver: RaceDriverResult = {
  positionNumber: 3,
  driverNumber: '6',
  driverId: 'driver-three',
  constructorId: 'williams',
  engineManufacturerId: 'bmw',
  tyreManufacturerId: 'michelin',
  laps: 59,
  time: null,
  gap: null,
  reasonRetired: null,
  ...raceUnusedAttributes,
};

export const raceOne: Race = {
  year: 2002,
  round: 1,
  date: '2002-04-06',
  grandPrixId: 'italia',
  circuitId: 'monza',
  qualifyingResults: [],
  raceResults: [...raceResults, thirdDriver],
};

export const raceTwo: Race = {
  year: 2002,
  round: 2,
  date: '2002-04-30',
  grandPrixId: 'great-britain',
  circuitId: 'brands-hatch',
  qualifyingResults: [],
  raceResults: [...raceResults, retiredThirdDriver],
};

export const raceThree: Race = {
  year: 2002,
  round: 3,
  date: '2002-05-21',
  grandPrixId: 'monaco',
  circuitId: 'monaco',
  qualifyingResults: [],
  raceResults: [...raceResults, noGapOrReasonRetiredThirdDriver],
};

const racesMock = (): Promise<Race[]> => Promise.resolve([raceOne, raceTwo]);

export default racesMock;
