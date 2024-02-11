import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // never refetch if the data is still in the cache
      staleTime: Infinity,
    },
  },
})
