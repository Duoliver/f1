import { screen, within } from '@testing-library/react';

export function getBreadcrumbsLink(name: string) {
  const breadcrumbsElement = screen.getByTestId('breadcrumbs');

  return within(breadcrumbsElement).getByRole('link', { name });
}
