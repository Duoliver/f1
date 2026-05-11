import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';
import SeasonGrandPrixPageHeader from './-components/SeasonGrandPrixPageHeader';
import useSeasonGrandPrix from './-hooks/useSeasonGrandPrix';
import SeasonGrandPrixContext from './-context';
import SeasonGrandPrixTabs from './-components/SeasonGrandPrixTabs';
import seasonGrandPrixLinkOptions from './-link';

export const Route = createFileRoute('/seasons/$season/$grandPrix/')({
  component: SeasonGrandPrixPage,
});

function SeasonGrandPrixPage() {
  const { season, grandPrix } = Route.useParams();
  const { race, raceResults } = useSeasonGrandPrix({
    season,
    grandPrix,
  });

  return (
    <PageLayout
      title={race?.officialName || ''}
      breadcrumbLinks={seasonGrandPrixLinkOptions(season, grandPrix)}
    >
      <SeasonGrandPrixContext.Provider value={{ race, raceResults }}>
        <main className="flex flex-col gap-16 w-full">
          <SeasonGrandPrixPageHeader />
          <SeasonGrandPrixTabs />
        </main>
      </SeasonGrandPrixContext.Provider>
    </PageLayout>
  );
}
