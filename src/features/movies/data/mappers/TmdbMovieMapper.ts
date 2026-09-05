import { Movie } from '../../domain/entities/Movie';
import { TmdbMovieDto } from '../dtos/TmdbMovieDto';

export function mapTmdbMovieToMovie(dto: TmdbMovieDto): Movie {
  return {
    id: dto.id,
    title: dto.title,
    overview: dto.overview,
    posterPath: dto.poster_path,
    voteAverage: dto.vote_average,
    releaseDate: dto.release_date,
  };
}
