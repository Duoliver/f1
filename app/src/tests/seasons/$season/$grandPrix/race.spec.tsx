import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { renderWithFileRoutes, screen, within } from '~/test-utils';
import {
  getRowColumns,
  getTableRows,
} from '~/test-utils/components/tableUtils';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(async () => {
  renderWithFileRoutes({
    initialLocation: '/seasons/2002/san-marino',
  });
  const tabHeadElement = await screen.findByRole('button', {
    name: /race results/i,
  });

  await userEvent.click(tabHeadElement);
});

describe('SeasonGrandPrixPage (Race tab, scenario 1)', () => {
  it('should display the race results as "race classification after X laps" given X is greater than 1', async () => {
    const element = await screen.findByRole('heading', { level: 2 });

    expect(element).toHaveTextContent(/race classification after 60 laps/i);
  });

  it('should display the grid driver information', async () => {
    const rows = await getTableRows();

    const [firstGridDriver, secondGridDriver, thirdGridDriver] =
      screen.getAllByTestId('grid-driver');

    expect(rows[0]).toContainElement(firstGridDriver);
    expect(rows[1]).toContainElement(secondGridDriver);
    expect(rows[2]).toContainElement(thirdGridDriver);
  });

  it('should display the position if the driver finished the race', async () => {
    const [firstRow] = await getTableRows();
    const firstRowColumns = getRowColumns(firstRow);
    const position = within(firstRowColumns[0]).getByTestId(
      'grid-driver-position'
    );

    expect(position).toHaveTextContent('1');
  });

  it('should display the race time if the driver finished the race', async () => {
    const [firstRow] = await getTableRows();
    const firstRowColumns = within(firstRow).getAllByRole('cell');
    const raceTimeColumn = firstRowColumns[3];

    expect(raceTimeColumn).toHaveTextContent('1:30:00.000');
  });

  it('should display the position as a hyphen character if the driver DNS or DNF', async () => {
    const rows = await getTableRows();
    const thirdRowColumns = getRowColumns(rows[2]);
    const position = within(thirdRowColumns[0]).getByTestId(
      'grid-driver-position'
    );

    expect(position).toHaveTextContent('-');
  });

  it('should display the retirement reason in the race time column if the driver DNS or DNF', async () => {
    const rows = await getTableRows();
    const thirdRowColumns = getRowColumns(rows[2]);
    const raceTimeColumn = thirdRowColumns[3];

    expect(raceTimeColumn).toHaveTextContent(/brakes/i);
  });

  it('should display the driver fastest lap time if they set a lap', async () => {
    const [firstRow] = await getTableRows();
    const firstRowColumns = getRowColumns(firstRow);
    const fastestLapColumn = firstRowColumns[1];

    expect(fastestLapColumn).toHaveTextContent('1:23.657');
  });

  it('should display the driver fastest lap time as a hyphen character if they did not set a lap', async () => {
    const rows = await getTableRows();
    const thirdRowColumns = getRowColumns(rows[2]);
    const fastestLapColumn = thirdRowColumns[1];

    expect(fastestLapColumn).toHaveTextContent('-');
  });

  it('should display the driver fastest lap time in purple if it was the fastest of the race', async () => {
    const [firstRow] = await getTableRows();
    const firstRowColumns = getRowColumns(firstRow);
    const fastestLapColumn = firstRowColumns[1];

    expect(fastestLapColumn).toHaveClass('text-purple');
  });

  it('should display the driver fastest lap time in the default colour if it was not the fastest of the race', async () => {
    const rows = await getTableRows();
    const secondRowColumns = getRowColumns(rows[1]);
    const fastestLapColumn = secondRowColumns[1];

    expect(fastestLapColumn).not.toHaveClass('text-purple');
  });

  it('should display the correct number of laps completed', async () => {
    const [firstRow] = await getTableRows();
    const firstRowColumns = getRowColumns(firstRow);
    const lapsColumns = firstRowColumns[2];

    expect(lapsColumns).toHaveTextContent('60');
  });

  it('should display a hyphen character as the number of laps no laps were completed', async () => {
    const rows = await getTableRows();
    const thirdRowColumns = getRowColumns(rows[2]);
    const lapsColumns = thirdRowColumns[2];

    expect(lapsColumns).toHaveTextContent('-');
  });
});
