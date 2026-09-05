import { tmdbClient } from '../../../../shared/api/tmdbClient';
import { Movie } from '../../domain/entities/Movie';
import { TmdbMoviesResponseDto } from '../dtos/TmdbMovieDto';
import { mapTmdbMovieToMovie } from '../mappers/TmdbMovieMapper';

export const getPopularMoviesFromApi = async (): Promise<Movie[]> => {
  const response = await tmdbClient.get<TmdbMoviesResponseDto>(
    '/movie/popular',
    {
      params: {
        language: 'es-ES',
        page: 1,
      },
    },
  );

  return response.data.results.map(mapTmdbMovieToMovie);
};

export const searchMoviesFromApi = async (query: string): Promise<Movie[]> => {
  const response = await tmdbClient.get<TmdbMoviesResponseDto>(
    '/search/movie',
    {
      params: {
        language: 'es-ES',
        page: 1,
        query,
      },
    },
  );

  return response.data.results.map(mapTmdbMovieToMovie);
};
