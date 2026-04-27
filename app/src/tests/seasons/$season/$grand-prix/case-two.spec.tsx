import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { renderWithFileRoutes, screen } from '~/test-utils';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(() =>
  renderWithFileRoutes({
    initialLocation: '/seasons/2002/great-britain',
  })
);

describe('SeasonGrandPrixPage', () => {
  it('should display the race results as "race classification after X lap" given X is equal to 1', async () => {
    const element = await screen.findByRole('heading', { level: 2 });

    expect(element).toHaveTextContent(/race classification after 1 lap/i);
  });
});
