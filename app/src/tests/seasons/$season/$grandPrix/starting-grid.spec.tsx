import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { renderWithFileRoutes, screen } from '~/test-utils';
import { getRowColumns, getTableRows } from '~/utils/tableUtils';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(async () => {
  renderWithFileRoutes({
    initialLocation: '/seasons/2002/san-marino',
  });
});

describe('SeasonGrandPrixPage (Starting Grid tab)', async () => {
  it('should display the grid driver information (GridDriver)', async () => {
    const rows = await getTableRows();

    const [firstGridDriver, secondGridDriver, thirdGridDriver] =
      screen.getAllByTestId('grid-driver');

    expect(rows[0]).toContainElement(firstGridDriver);
    expect(rows[1]).toContainElement(secondGridDriver);
    expect(rows[2]).toContainElement(thirdGridDriver);
  });

  it('should display the correct driver quali lap', async () => {
    const [firstRow] = await getTableRows();
    const rowColumns = getRowColumns(firstRow);
    const qualiLapTime = rowColumns[1];

    expect(qualiLapTime).toHaveTextContent('1:23.657');
  });

  it('should display the position text in the lap time column if it is a text', async () => {
    const rows = await getTableRows();
    const rowColumns = getRowColumns(rows[3]);
    const qualiLapTime = rowColumns[1];

    expect(qualiLapTime).toHaveTextContent(/pl/i);
  });

  it('should display the qualification position text in the lap time column if it is a text', async () => {
    const rows = await getTableRows();
    const rowColumns = getRowColumns(rows[4]);
    const qualiLapTime = rowColumns[1];

    expect(qualiLapTime).toHaveTextContent(/nc/i);
  });

  it('should display a hyphen character in the lap time column if there is no lap time or no qualifying position text different to a number', async () => {
    const rows = await getTableRows();
    const rowColumns = getRowColumns(rows[5]);
    const qualiLapTime = rowColumns[1];

    expect(qualiLapTime).toHaveTextContent('-');
  });
});
