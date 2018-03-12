export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCEEDED = 'FETCH_MOVIES_SUCCEEDED';
export const FETCH_MOVIES_FAILED = 'FETCH_MOVIES_FAILED';

export const SELECT_MOVIE = 'SELECT_MOVIE';

export const fetchMovies = movies => ({
  type: FETCH_MOVIES,
  movies,
});

export const fetchMoviesSucceed = movies => ({
  type: FETCH_MOVIES_SUCCEEDED,
  movies,
});

export const fetchMoviesFailed = error => ({
  type: FETCH_MOVIES_FAILED,
  error,
});

export const selectMovie = movie => ({
  type: SELECT_MOVIE,
  movie,
});
