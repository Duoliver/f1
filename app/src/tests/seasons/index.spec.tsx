import { describe, it, expect, vi } from 'vitest';
import { renderWithFileRoutes, screen } from '~/test-utils';
import { beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

vi.mock(import('~/api/services/seasons/index.ts'), () => {
  return {
    default: () => {
      return Promise.resolve([{ year: '2024' }, { year: '2023' }]);
    },
  };
});

beforeEach(() => {
  renderWithFileRoutes({
    initialLocation: '/seasons',
  });
});

describe('SeasonsPage', () => {
  it('should render the seasons list', async () => {
    expect(await screen.findByText(/formula one seasons/i)).toBeInTheDocument();
    expect(await screen.findByText('2024')).toBeInTheDocument();
    expect(await screen.findByText('2023')).toBeInTheDocument();
  });

  it("should navigate to the 2024 season page on clicking it's link", async () => {
    const seasonLinkElement = await screen.findByText('2024');
    await userEvent.click(seasonLinkElement);

    expect(await screen.findByTestId('pathname')).toHaveTextContent(
      '/seasons/2024'
    );
  });
});
