import { formatFullDate } from '~/utils/formatDate';
import clearSlug from '~/utils/clearSlug';
import useSeasonGrandPrixContext from '../../-context/useSeasonGrandPrixContext';

export default function SeasonGrandPrixPageHeader() {
  const { race } = useSeasonGrandPrixContext();

  if (!race) return null;
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <span
        data-testid="season-grand-prix-round"
        className="flex-1 text-center md:text-start"
      >
        Round {race.round}
      </span>
      <span
        data-testid="season-grand-prix-circuit"
        className="flex-1 uppercase text-center"
      >
        {clearSlug(race.circuitId)}
      </span>
      <span
        data-testid="season-grand-prix-date"
        className="flex-1 uppercase text-center md:text-end"
      >
        {formatFullDate(race.date)}
      </span>
    </div>
  );
}
