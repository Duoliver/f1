import { act, render as rtlRender } from '@testing-library/react';
import { queryClientOptions } from '~/api/react-query/queryClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { routeTree } from '~/routeTree.gen';
import type RenderWithFileRoutesOptions from './types';

function generateQueryClient() {
  return new QueryClient(queryClientOptions);
}

async function renderWithFileRoutes({
  initialLocation = '/',
  routerContext = {},
  ...renderOptions
}: RenderWithFileRoutesOptions = {}) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: {
      ...routerContext,
    },
  });

  await router.load();

  let result: ReturnType<typeof rtlRender>;

  const queryClient = routerContext?.queryClient ?? generateQueryClient();

  await act(async () => {
    function Wrapper() {
      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      );
    }

    result = rtlRender(null, { wrapper: Wrapper, ...renderOptions });
  });

  await act(() => Promise.resolve());

  return { ...result!, router, queryClient };
}

export * from '@testing-library/react';
export { renderWithFileRoutes };
