// @flow
import React from 'react';

import './MovieCard.css';

type Props = {
  movie: Movie,
  handleMovieClick: () => void,
};

const MovieCard = ({ movie, handleMovieClick }: Props) => (
  <div
    className="MovieCard"
    role="button"
    tabIndex="0"
    onKeyDown={() => {}}
    onClick={handleMovieClick}
    style={{
      backgroundImage: `url(${movie.poster})`,
    }}
  >
    <div className="MovieCard-description">
      <span className="title">{movie.name}</span>
      <span className="year">{movie.year}</span>
    </div>
  </div>
);

export default MovieCard;
