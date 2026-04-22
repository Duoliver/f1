import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { render, screen } from '~/test-utils';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(() =>
  render({
    initialLocation: '/seasons/2002/italy',
  })
);

describe('SeasonGrandPrixPage', () => {
  it('should display the official grand prix full name', async () => {
    const element = await screen.findByRole('heading', {
      level: 1,
    });
    expect(element).toHaveTextContent(/Gran Premio Vodafone d'Italia 2002/i);
  });

  it('should display the correct round number', async () => {
    const element = await screen.findByTestId('season-grand-prix-round');
    expect(element).toHaveTextContent(/round 1/i);
  });

  it('should display the correct circuit name', async () => {
    const element = await screen.findByTestId('season-grand-prix-circuit');
    expect(element).toHaveTextContent(/monza/i);
  });

  it('should display the correct race date', async () => {
    const element = await screen.findByTestId('season-grand-prix-date');
    expect(element).toHaveTextContent(/6 april 2002/i);
  });
});
