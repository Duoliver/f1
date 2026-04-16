import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

const gcTime = 2 * 60 * 1000;

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
      gcTime: gcTime,
    },
  },
};

const queryClient = new QueryClient(queryClientOptions);

export default queryClient;
export { queryClientOptions };
