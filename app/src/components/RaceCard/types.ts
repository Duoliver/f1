import type Race from '../../types/response/Race';
import type RaceDriverResult from '../../types/response/RaceDriverResult';

export default interface RaceCardProps {
  race: Race;
}

export interface GridPlaceSmallProps {
  driverResult: RaceDriverResult;
}

export interface RaceCardHeaderProps {
  round: number;
  date: string;
  grandPrixName: string;
  circuitName: string;
}
