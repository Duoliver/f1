import { createFileRoute, Link } from '@tanstack/react-router';
import useSeasons from '../../api/hooks/useSeasons';
import PageLayout from '../../layouts/PageLayout';

export const Route = createFileRoute('/seasons/')({
  component: SeasonsPage,
});

function SeasonsPage() {
  const { seasons } = useSeasons({ _sort: { key: 'year', order: 'DESC' } });

  return (
    <PageLayout title="Formula One Seasons">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {seasons.map(({ year }) => (
          <h2 className="text-center" key={year}>
            <Link to={`/seasons/$season`} params={{ season: year }}>
              {year}
            </Link>
          </h2>
        ))}
      </div>
    </PageLayout>
  );
}
