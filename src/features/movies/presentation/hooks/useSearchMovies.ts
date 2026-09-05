import { useQuery } from '@tanstack/react-query';

import { searchMoviesFromApi } from '../../data/repositories/TmdbMoviesRepository';

export function useSearchMovies(query: string) {
  const normalizedQuery = query.trim();

  return useQuery({
    queryKey: ['movies', 'search', normalizedQuery],
    queryFn: () => searchMoviesFromApi(normalizedQuery),
    enabled: normalizedQuery.length > 0,
  });
}
