import cleanSlug from '../../../utils/cleanSlug';
import formatDate from '../../../utils/formatDate';
import type { RaceCardHeaderProps } from '../types';

export default function RaceCardHeader({
  circuitName,
  date,
  grandPrixName,
  round,
}: RaceCardHeaderProps) {
  return (
    <header className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h6>Round {round}</h6>
        <p className="p-0 uppercase">{formatDate(date)}</p>
      </div>
      <h3 className="text-yellow">{cleanSlug(grandPrixName)}</h3>
      <p className="p-0 uppercase">{cleanSlug(circuitName)}</p>
    </header>
  );
}
