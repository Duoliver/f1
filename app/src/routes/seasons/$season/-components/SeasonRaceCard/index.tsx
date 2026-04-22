import { Link } from '@tanstack/react-router';
import RaceCard from '../../../../../components/RaceCard';
import useRaceCardContext from '../../../../../components/RaceCard/context/useRaceCardContext';
import type {
  RaceCardAdapterProps,
  RaceCardTitleWrapperProps,
} from '../../../../../components/RaceCard/types';

export default function SeasonRaceCard(props: RaceCardAdapterProps) {
  return <RaceCard {...props} TitleWrapper={SeasonRaceCardTitleWrapper} />;
}

function SeasonRaceCardTitleWrapper({ children }: RaceCardTitleWrapperProps) {
  const { race } = useRaceCardContext();

  return (
    <Link
      to="/seasons/$season/$grandPrix"
      params={{
        grandPrix: race.grandPrixId || '',
        season: String(race.year),
      }}
    >
      {children}
    </Link>
  );
}
