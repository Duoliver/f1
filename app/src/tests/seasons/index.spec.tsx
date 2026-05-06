import { describe, it, expect, vi } from 'vitest';
import { renderWithFileRoutes, screen } from '~/test-utils';
import { beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';

vi.mock(import('~/api/services/seasons/index.ts'), () => {
  return {
    default: () => {
      return Promise.resolve([
        { year: '2024' },
        { year: '2023' },
        { year: '2002' },
      ]);
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

  it('should group 2020s seasons into their decade', async () => {
    const sectionHeading = await screen.findByRole('heading', {
      level: 2,
      name: '2020s',
    });

    const season1Element = screen.getByRole('link', { name: '2024' });
    const season2Element = screen.getByRole('link', { name: '2023' });

    expect(season1Element).toAppearAfter(sectionHeading);
    expect(season2Element).toAppearAfter(sectionHeading);
  });

  it('should group 2000s seasons into their decade and after 2020s', async () => {
    const sectionHeading = await screen.findByRole('heading', {
      level: 2,
      name: '2000s',
    });

    const season2024Element = screen.getByRole('link', { name: '2024' });
    const season2002Element = screen.getByRole('link', { name: '2002' });

    expect(season2024Element).toAppearBefore(sectionHeading);
    expect(season2002Element).toAppearAfter(sectionHeading);
  });
});
