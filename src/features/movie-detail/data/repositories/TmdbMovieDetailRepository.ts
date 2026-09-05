import { tmdbClient } from '../../../../shared/api/tmdbClient';
import { MovieDetail } from '../../domain/entities/MovieDetail';
import { TmdbMovieDetailDto } from '../dtos/TmdbMovieDetailDto';
import { mapTmdbMovieDetailToMovieDetail } from '../mappers/TmdbMovieDetailMapper';

export const getMovieDetailFromApi = async (
  movieId: number,
): Promise<MovieDetail> => {
  const response = await tmdbClient.get<TmdbMovieDetailDto>(
    `/movie/${movieId}`,
    {
      params: {
        language: 'es-ES',
      },
    },
  );

  return mapTmdbMovieDetailToMovieDetail(response.data);
};
