// @flow
import React from 'react';

import './MoviePlayer.css';

type Props = {
  selected: Movie,
};

const MoviePlayer = ({ selected }: Props) => (
  <div className="MoviePlayer">
    <iframe
      title="movieFrame"
      src={`${selected.trailer}?showinfo=0`}
      frameBorder="0"
    />
  </div>
);

export default MoviePlayer;
