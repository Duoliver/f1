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
});
