import type Race from '../../types/response/Race';

interface RaceCardProps {
  race: Race; // not the best option
}

// TODO convert date to MONTH 10TH
// TODO parse string IDs to names

export default function RaceCard({ race }: RaceCardProps) {
  return (
    <section className="flex flex-col p-4 gap-12 border border-white">
      <header className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h6>Round {race.round}</h6>
          <p className="p-0 uppercase">{formatDate(race.date)}</p>
        </div>
        <h3 className="text-yellow">{cleanSlug(race.grandPrixId)}</h3>
        <p className="p-0 uppercase">{cleanSlug(race.circuitId)}</p>
      </header>
      <footer className="flex flex-col">
        {race.raceResults.slice(0, 3).map((driverResult) => (
          <div
            className="flex gap-1"
            key={`${race.grandPrixId}-${driverResult.positionNumber}`}
          >
            <span className="flex items-center justify-center text-center aspect-square h-9 bg-yellow">
              <h5 className="text-black">{driverResult.positionNumber}</h5>
            </span>
            <div>
              <h6 className="uppercase">{cleanSlug(driverResult.driverId)}</h6>
              <p className="p-0 text-yellow uppercase">
                {driverResult.time ||
                  driverResult.gap ||
                  driverResult.reasonRetired ||
                  '-'}
              </p>
            </div>
          </div>
        ))}
      </footer>
    </section>
  );
}

const dateFormatter = Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});

function formatDate(date: string) {
  return dateFormatter.format(new Date(date));
}

function cleanSlug(slug: string) {
  return slug.split('-').join(' ');
}
