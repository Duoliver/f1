import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import racesMock from '~/mocks/races';
import { renderWithFileRoutes, screen, within } from '~/test-utils';
import { getBreadcrumbsLink } from '~/test-utils/components/breadcrumbsUtils';

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

  it('should display the tabs component', async () => {
    const element = await screen.findByTestId('tabs');
    expect(element).toBeVisible();
  });

  it('should display the starting grid and race results tab heads', async () => {
    const tabsElement = await screen.findByTestId('tabs');

    const tabHeads = within(tabsElement).getAllByTestId('tabs-tab-head');

    expect(tabHeads[0]).toHaveTextContent(/starting grid/i);
    expect(tabHeads[1]).toHaveTextContent(/race results/i);
  });

  it('should start by displaying the starting grid tab', async () => {
    const subHeading = await screen.findByRole('heading', {
      level: 2,
    });

    expect(subHeading).toHaveTextContent(/starting grid/i);
  });

  it('should switch to the race results tab by clicking on its tab head', async () => {
    const tabHeadElement = await screen.findByRole('button', {
      name: /race results/i,
    });

    await userEvent.click(tabHeadElement);

    const subHeading = await screen.findByRole('heading', {
      level: 2,
    });

    expect(subHeading).toHaveTextContent(/race classification after 60 laps/i);
  });

  it('should switch back to the starting grid tab from race results by clicking on its tab head', async () => {
    const tabsElement = await screen.findByTestId('tabs');

    const tabHeads = within(tabsElement).getAllByTestId('tabs-tab-head');
    await userEvent.click(tabHeads[1]);
    await userEvent.click(tabHeads[0]);

    const subHeading = await screen.findByRole('heading', {
      level: 2,
    });

    expect(subHeading).toHaveTextContent(/starting grid/i);
  });

  it('should navigate to the season page when clicking on its breadcrumbs link', async () => {
    const link = getBreadcrumbsLink('2002');

    await userEvent.click(link);

    expect(await screen.findByTestId('pathname')).toHaveTextContent(
      '/seasons/2002'
    );
  });

  it('should navigate to the seasons page when clicking on its breadcrumbs link', async () => {
    const link = getBreadcrumbsLink('Seasons');

    await userEvent.click(link);

    expect(await screen.findByTestId('pathname')).toHaveTextContent('/seasons');
  });

  it('should navigate to the home page when clicking on its breadcrumbs link', async () => {
    const link = getBreadcrumbsLink('Home');

    await userEvent.click(link);

    expect(await screen.findByTestId('pathname')).toHaveTextContent('/');
  });
});
