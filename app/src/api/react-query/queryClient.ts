import { QueryClient, type QueryClientConfig } from '@tanstack/react-query';

const queryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
};

const queryClient = new QueryClient(queryClientOptions);

export default queryClient;
export { queryClientOptions };
