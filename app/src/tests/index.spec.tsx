import { beforeEach, describe, expect, it } from 'vitest';
import { act, render, screen } from '../test-utils';

beforeEach(() => {
  render({
    initialLocation: '/',
  });
});

describe('HomePage', () => {
  it("should navigate to the seasons page on clicking it's link", async () => {
    await act(async () => {
      (await screen.findByText(/seasons/i)).click();
    });

    expect(await screen.findByTestId('pathname')).toHaveTextContent('/seasons');
  });
});
