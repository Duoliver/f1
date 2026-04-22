import { describe, it, expect, vi } from 'vitest';
import { act, render, screen } from '~/test-utils';
import { beforeEach } from 'vitest';

vi.mock(import('~/api/services/seasons/index.ts'), () => {
  return {
    default: () => {
      return Promise.resolve([{ year: '2024' }, { year: '2023' }]);
    },
  };
});

beforeEach(() => {
  render({
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
    await act(async () => {
      (await screen.findByText('2024')).click();
    });

    expect(await screen.findByTestId('pathname')).toHaveTextContent(
      '/seasons/2024'
    );
  });
});
