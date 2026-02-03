import {
  render as rtlRender,
  type RenderOptions,
} from '@testing-library/react';
import { queryClientOptions } from '../api/react-query/queryClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

interface RenderWithFileRoutesOptions extends Omit<RenderOptions, 'wrapper'> {
  initialLocation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routerContext?: any;
}

function generateQueryClient() {
  return new QueryClient(queryClientOptions);
}

export function createTestRouterFromFiles(
  initialLocation = '/',
  client?: QueryClient
) {
  const queryClient = client ?? generateQueryClient();
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: {
      queryClient,
    },
  });

  return router;
}

function renderWithFileRoutes({
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
      // queryClient: routerContext?.queryClient ?? generateQueryClient(),
    },
  });

  const queryClient = routerContext?.queryClient ?? generateQueryClient();

  function Wrapper() {
    return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    );
  }

  return {
    ...rtlRender(<div />, { wrapper: Wrapper, ...renderOptions }),
    router,
  };
}

export * from '@testing-library/react';
export { renderWithFileRoutes as render };
