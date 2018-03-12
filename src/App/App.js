// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import MovieList from './MovieList';
import MoviePlayer from './MoviePlayer';
import Loader from './Loader';

import { fetchMovies, selectMovie } from './AppAction';

type Props = {
  fetchMovies: () => void,
  movies: Array<Movie>,
  selectedMovie: Movie,
  selectMovie: Movie => void,
};

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          {this.props.selectedMovie && (
            <MoviePlayer selected={this.props.selectedMovie} />
          )}
          {this.props.movies ? (
            <MovieList
              movies={this.props.movies}
              selected={this.props.selectedMovie}
              handleMovieClick={movie => this.props.selectMovie(movie)}
            />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.app.movies,
  selectedMovie: state.app.selected,
});

export default connect(mapStateToProps, { fetchMovies, selectMovie })(App);
