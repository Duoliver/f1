import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../test-utils';

vi.mock(import('../../../api/services/seasons/index.ts'), () => {
  return {
    default: () => {
      return Promise.resolve([{ year: '2024' }, { year: '2023' }]);
    },
  };
});

describe('SeasonsPage', () => {
  it('deve renderizar a lista de temporadas', async () => {
    render({
      initialLocation: '/seasons',
    });

    expect(await screen.findByText(/formula one seasons/i)).toBeInTheDocument();
    expect(await screen.findByText('2024')).toBeInTheDocument();
    expect(await screen.findByText('2023')).toBeInTheDocument();
  });
});
