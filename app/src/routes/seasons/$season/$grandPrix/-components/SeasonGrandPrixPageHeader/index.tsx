import { formatFullDate } from '~/utils/formatDate';
import type SeasonGrandPrixPageHeaderProps from './types';
import clearSlug from '~/utils/clearSlug';

export default function SeasonGrandPrixPageHeader({
  circuitName,
  date,
  round,
}: SeasonGrandPrixPageHeaderProps) {
  if (!circuitName || !date || !round) return null;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <span
        data-testid="season-grand-prix-round"
        className="flex-1 text-center md:text-start"
      >
        Round {round}
      </span>
      <span
        data-testid="season-grand-prix-circuit"
        className="flex-1 uppercase text-center"
      >
        {clearSlug(circuitName)}
      </span>
      <span
        data-testid="season-grand-prix-date"
        className="flex-1 uppercase text-center md:text-end"
      >
        {formatFullDate(date)}
      </span>
    </div>
  );
}
