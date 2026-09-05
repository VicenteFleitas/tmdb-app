import { useQuery } from '@tanstack/react-query';

import { getPopularMoviesFromApi } from '../../data/repositories/TmdbMoviesRepository';
import { getPopularMovies } from '../../domain/use-cases/GetPopularMovies';
import { MoviesRepository } from '../../domain/repositories/MoviesRepository';

const moviesRepository: MoviesRepository = {
  getPopularMovies: getPopularMoviesFromApi,
};

export function usePopularMovies() {
  return useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: () => getPopularMovies(moviesRepository),
  });
}
