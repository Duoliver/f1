import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { renderWithFileRoutes, screen, within } from '~/test-utils';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(() =>
  renderWithFileRoutes({
    initialLocation: '/seasons/2002/san-marino',
  })
);

describe('SeasonGrandPrixPage', () => {
  it('should display the official grand prix full name', async () => {
    const element = await screen.findByRole('heading', {
      level: 1,
    });
    expect(element).toHaveTextContent(/gran premio di san marino 2002/i);
  });

  it('should display the correct round number', async () => {
    const element = await screen.findByTestId('season-grand-prix-round');
    expect(element).toHaveTextContent(/round 4/i);
  });

  it('should display the correct circuit name', async () => {
    const element = await screen.findByTestId('season-grand-prix-circuit');
    expect(element).toHaveTextContent(/imola clockwise/i);
  });

  it('should display the correct race date', async () => {
    const element = await screen.findByTestId('season-grand-prix-date');
    expect(element).toHaveTextContent(/29 may 2002/i);
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
});

async function getTableBody() {
  const tableElement = await screen.findByRole('table');

  return within(tableElement).getAllByRole('rowgroup')[1];
}

async function getTableRows() {
  const tableBody = await getTableBody();

  return within(tableBody).getAllByRole('row');
}

function getRowColumns(row: HTMLElement) {
  return within(row).getAllByRole('cell');
}
