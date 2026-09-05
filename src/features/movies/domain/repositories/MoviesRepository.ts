import { Movie } from '../entities/Movie';

export interface MoviesRepository {
  getPopularMovies(): Promise<Movie[]>;
}
