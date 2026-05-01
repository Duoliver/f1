import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithFileRoutes, screen } from '~/test-utils';
import { userEvent } from '@testing-library/user-event';

beforeEach(() => {
  renderWithFileRoutes({
    initialLocation: '/',
  });
});

describe('HomePage', () => {
  it("should navigate to the seasons page on clicking it's link", async () => {
    const seasonsLinkElement = await screen.findByText(/seasons/i);
    await userEvent.click(seasonsLinkElement);

    expect(await screen.findByTestId('pathname')).toHaveTextContent('/seasons');
  });
});
