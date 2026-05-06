import { createFileRoute } from '@tanstack/react-router';
import useSeasons from '~/api/hooks/useSeasons';
import PageLayout from '~/layouts/PageLayout';
import SeasonsDecadeSection from './-components/SeasonsDecadeSection';

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
          <SeasonsDecadeSection
            decade={decade}
            yearsList={seasonsGroupedByDecade[decade]!}
          />
        ))}
      </div>
    </PageLayout>
  );
}

function getDecadeFromYear(year: string) {
  return `${String(year).substring(0, 3)}0s`;
}
