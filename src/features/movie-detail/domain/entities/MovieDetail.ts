export type MovieDetail = {
  id: number;
  title: string;
  overview: string;
  posterPath: string | null;
  voteAverage: number;
  releaseDate: string;
  genres: string[];
};
