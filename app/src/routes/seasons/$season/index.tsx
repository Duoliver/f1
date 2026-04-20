import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '../../../layouts/PageLayout';
import useRaces from '../../../api/hooks/useRaces';
import RaceCard from '../../../components/RaceCard';

export const Route = createFileRoute('/seasons/$season/')({
  component: SeasonPage,
});

function SeasonPage() {
  const { season } = Route.useParams();
  const { races } = useRaces({
    year: Number(season),
  });

  const title = `${season} Formula One Season`;

  return (
    <PageLayout title={title}>
      <main className="flex flex-col gap-4 w-full">
        <h2 className="text-center">Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {races.map((race) => (
            <RaceCard race={race} key={race.date} />
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
