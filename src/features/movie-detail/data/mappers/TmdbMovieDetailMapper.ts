import { MovieDetail } from '../../domain/entities/MovieDetail';
import { TmdbMovieDetailDto } from '../dtos/TmdbMovieDetailDto';

export function mapTmdbMovieDetailToMovieDetail(
  dto: TmdbMovieDetailDto,
): MovieDetail {
  return {
    id: dto.id,
    title: dto.title,
    overview: dto.overview,
    posterPath: dto.poster_path,
    voteAverage: dto.vote_average,
    releaseDate: dto.release_date,
    genres: dto.genres.map(genre => genre.name),
  };
}
