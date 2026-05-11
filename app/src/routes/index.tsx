import { createFileRoute, Link } from '@tanstack/react-router';
import PageLayout from '~/layouts/PageLayout';
import homeLinkOptions from './-link';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageLayout title="Main menu" breadcrumbLinks={homeLinkOptions}>
      <ul>
        <li>
          <h2>
            <Link to="/seasons">Seasons</Link>
          </h2>
        </li>
      </ul>
    </PageLayout>
  );
}
