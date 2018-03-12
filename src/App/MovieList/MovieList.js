// @flow
import React from 'react';

import './MovieList.css';

import MovieCard from '../MovieCard';

type Props = {
  movies: Array<Movie>,
  handleMovieClick: () => void,
};

const MovieList = ({ movies, handleMovieClick }: Props) => (
  <div className="MovieList">
    {movies.map(movie => (
      <MovieCard
        key={movie.name}
        movie={movie}
        handleMovieClick={() => handleMovieClick(movie)}
      />
    ))}
  </div>
);

export default MovieList;
