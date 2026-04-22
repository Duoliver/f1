import type React from 'react';
import type Race from '../../types/response/Race';
import type RaceDriverResult from '../../types/response/RaceDriverResult';

export interface RaceCardAdapterProps {
  race: Race;
}

export default interface RaceCardProps extends RaceCardAdapterProps {
  TitleWrapper?: ({ children }: RaceCardTitleWrapperProps) => React.JSX.Element;
}

export interface RaceCardTitleWrapperProps {
  children: React.ReactNode;
}

export interface GridPlaceSmallProps {
  driverResult: RaceDriverResult;
}

export interface RaceCardHeaderProps {
  round: number;
  date: string;
  grandPrixName: string;
  circuitName: string;
  year: number;
}
