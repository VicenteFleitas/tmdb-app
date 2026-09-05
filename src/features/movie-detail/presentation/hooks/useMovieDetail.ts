import { useQuery } from '@tanstack/react-query';

import { getMovieDetailFromApi } from '../../data/repositories/TmdbMovieDetailRepository';

export function useMovieDetail(movieId: number) {
  return useQuery({
    queryKey: ['movie', 'detail', movieId],
    queryFn: () => getMovieDetailFromApi(movieId),
  });
}
