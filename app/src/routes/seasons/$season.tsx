import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/seasons/$season')({
  component: SeasonPage,
});

function SeasonPage() {
  const { season } = Route.useParams();
  return <div>Hello "/seasons/{season}"!</div>;
}
