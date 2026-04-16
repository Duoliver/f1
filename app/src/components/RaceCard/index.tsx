import GridPlaceSmall from './components/GridPlaceSmall';
import RaceCardHeader from './components/RaceCardHeader';
import type RaceCardProps from './types';

export default function RaceCard({ race }: RaceCardProps) {
  return (
    <section
      className="flex flex-col p-4 justify-between border border-white"
      data-testid={`race-card-${race.round}`}
    >
      <RaceCardHeader
        circuitName={race.circuitId}
        date={race.date}
        grandPrixName={race.grandPrixId}
        round={race.round}
      />
      <footer className="flex flex-col mt-12 gap-1">
        {race.raceResults.slice(0, 3).map((driverResult) => (
          <GridPlaceSmall
            driverResult={driverResult}
            key={`${race.grandPrixId}-${driverResult.positionNumber}`}
          />
        ))}
      </footer>
    </section>
  );
}
