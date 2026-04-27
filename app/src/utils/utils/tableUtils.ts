import { screen, within } from '@testing-library/react';

export async function getTableBody() {
  const tableElement = await screen.findByRole('table');

  return within(tableElement).getAllByRole('rowgroup')[1];
}

export async function getTableRows() {
  const tableBody = await getTableBody();

  return within(tableBody).getAllByRole('row');
}

export function getRowColumns(row: HTMLElement) {
  return within(row).getAllByRole('cell');
}
