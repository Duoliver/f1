import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '../../../../test-utils';
import racesMock from '../../../../mocks/races';

vi.mock(import('../../../../api/services/races'), () => {
  return {
    default: racesMock,
  };
});

// beforeEach(async () => {
//   await act(async () => {
//     render({
//       initialLocation: '/seasons/2002',
//     });
//   });
// });

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

  // TODO test if it correctly goes to the race page when clicked. not implemented yet.
});
