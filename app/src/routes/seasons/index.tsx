import { createFileRoute } from '@tanstack/react-router';
import useSeasons from '~/api/hooks/useSeasons';
import PageLayout from '~/layouts/PageLayout';
import SeasonLink from './-components/SeasonLink';

export const Route = createFileRoute('/seasons/')({
  component: SeasonsPage,
});

export default function SeasonsPage() {
  const { seasons } = useSeasons({ _sort: { key: 'year', order: 'DESC' } });

  const seasonsGroupedByDecade = Object.groupBy(seasons, (season) =>
    getDecadeFromYear(season.year)
  );

  return (
    <PageLayout title="Formula One Seasons">
      <div className="flex flex-col gap-8">
        {Object.keys(seasonsGroupedByDecade).map((decade) => (
          <div className="flex flex-col gap-4">
            <h2 className="lowercase">{decade}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {seasonsGroupedByDecade[decade]!.map(({ year }) => (
                <SeasonLink year={year} key={year} />
              ))}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

function getDecadeFromYear(year: string) {
  return `${String(year).substring(0, 3)}0s`;
}
