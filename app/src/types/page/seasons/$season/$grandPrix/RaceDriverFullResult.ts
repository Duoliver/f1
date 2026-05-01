import type RaceDriverFastestLap from '~/types/response/RaceDriverFastestLap';
import type RaceDriverResult from '~/types/response/RaceDriverResult';

export default interface RaceDriverFullResult {
  raceResult: RaceDriverResult;
  fastestLap?: RaceDriverFastestLap;
}
