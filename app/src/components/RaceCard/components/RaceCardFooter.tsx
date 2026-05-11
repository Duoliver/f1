import formatDate from '~/utils/formatDate';
import useRaceCardContext from '../context/useRaceCardContext';
import GridPlaceSmall from './GridPlaceSmall';
import type RaceDriverResult from '~/types/response/RaceDriverResult';

export default function RaceCardFooter() {
  const {
    race: { raceResults, date, grandPrixId },
  } = useRaceCardContext();

  return (
    <footer className="flex flex-col mt-12 gap-1">
      {raceResults ? (
        getPodiumFinishers(raceResults).map((driverResult) => (
          <GridPlaceSmall
            driverResult={driverResult}
            key={`${grandPrixId}-${driverResult.positionNumber}-${driverResult.driverId}`}
          />
        ))
      ) : (
        <h4>{formatDate(date)}</h4>
      )}
    </footer>
  );
}

function getPodiumFinishers(raceResults: RaceDriverResult[]) {
  return raceResults.slice(0, 3);
}
