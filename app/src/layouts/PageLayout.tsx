import { useLocation } from '@tanstack/react-router';
import type { PageLayoutProps } from './types';
import { useIsFetching } from '@tanstack/react-query';
import Breadcrumbs from '~/components/Breadcrumbs';

export default function PageLayout({
  title,
  children,
  breadcrumbLinks,
}: PageLayoutProps) {
  const location = useLocation();
  const isFetching = useIsFetching();

  return (
    <>
      <div className="flex flex-col items-center gap-8 pb-8">
        <Breadcrumbs links={breadcrumbLinks} />
        <h1 className="text-center">{title}</h1>
        {isFetching ? (
          <span className="text-center">Loading...</span>
        ) : (
          children
        )}
      </div>
      <noscript data-testid="pathname">{location.pathname}</noscript>
    </>
  );
}
