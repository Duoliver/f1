import { screen, within } from '@testing-library/react';

export function getBreadcrumbsLink(name: string) {
  const breadcrumbsElement = screen.getByTestId('breadcrumbs');

  return within(breadcrumbsElement).getByRole('link', { name });
}

export async function findBreadcrumbsLink(name: string) {
  const breadcrumbsElement = await screen.findByTestId('breadcrumbs');

  return within(breadcrumbsElement).getByRole('link', { name });
}
