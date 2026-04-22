import clearSlug from '../../../utils/clearSlug';
import formatDate from '../../../utils/formatDate';
import type { RaceCardHeaderProps } from '../types';
import useRaceCardContext from '../context/useRaceCardContext';

export default function RaceCardHeader({
  circuitName,
  date,
  grandPrixName,
  round,
}: RaceCardHeaderProps) {
  const { TitleWrapper = ({ children }) => children } = useRaceCardContext();

  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h6 data-testid="race-card-round">Round {round}</h6>
        <p className="p-0 uppercase" data-testid="race-card-date">
          {formatDate(date)}
        </p>
      </div>
      <TitleWrapper>
        <h3 className="text-yellow" data-testid="race-card-gp">
          {clearSlug(grandPrixName)}
        </h3>
      </TitleWrapper>
      <p className="p-0 uppercase" data-testid="race-card-circuit">
        {clearSlug(circuitName)}
      </p>
    </header>
  );
}
