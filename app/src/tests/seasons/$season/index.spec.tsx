import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen } from '~/test-utils';
import racesMock from '~/mocks/races';

vi.mock(import('~/api/services/races'), () => {
  return {
    default: racesMock,
  };
});

beforeEach(() =>
  render({
    initialLocation: '/seasons/2002',
  })
);

describe('SeasonPage', () => {
  it('should render the 2002 season page', async () => {
    expect(
      await screen.findByText(/2002 formula one season/i)
    ).toBeInTheDocument();
  });

  it('should render the 2002 italian grand prix in monza', async () => {
    const cardElement = await screen.findByTestId('race-card-1');
    expect(cardElement).toBeInTheDocument();
  });

  it('should render the 2002 british grand prix in brands hatch', async () => {
    const cardElement = await screen.findByTestId('race-card-2');
    expect(cardElement).toBeInTheDocument();
  });

  it('should take to the season grand prix page when clicked the grand prix card title', async () => {
    await act(async () => {
      (await screen.findByText('italy')).click();
    });

    expect(await screen.findByTestId('pathname')).toHaveTextContent(
      '/seasons/2002/italy'
    );
  });
});
