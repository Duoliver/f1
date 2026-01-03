import { createFileRoute } from '@tanstack/react-router';
import useSeasons from '../../api/hooks/useSeasons';

export const Route = createFileRoute('/seasons/')({
  component: SeasonsPage,
});

function SeasonsPage() {
  const { seasons } = useSeasons({ _sort: { key: 'year', order: 'DESC' } });

  return (
    <div className="flex flex-col items-center gap-16">
      <h1>Formula One Seasons</h1>
      <div className="grid grid-cols-5 gap-4">
        {seasons.map(({ year }) => (
          <h2 className="text-center" key={year}>
            {year}
          </h2>
        ))}
      </div>
    </div>
  );
}
