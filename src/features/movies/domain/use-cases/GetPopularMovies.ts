import { Movie } from '../entities/Movie';
import { MoviesRepository } from '../repositories/MoviesRepository';

export const getPopularMovies = (
  moviesRepository: MoviesRepository,
): Promise<Movie[]> => {
  return moviesRepository.getPopularMovies();
};
