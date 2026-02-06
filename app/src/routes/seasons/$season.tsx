import { createFileRoute } from '@tanstack/react-router';
import PageLayout from '../../layouts/PageLayout';

export const Route = createFileRoute('/seasons/$season')({
  component: SeasonPage,
});

function SeasonPage() {
  const { season } = Route.useParams();

  const title = `${season} Formula One Season`;

  return (
    <PageLayout title={title}>
      <div>Hello "/seasons/{season}"!</div>
    </PageLayout>
  );
}
