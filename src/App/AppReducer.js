// @flow
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIES_FAILED,
  SELECT_MOVIE,
} from './AppAction';

export const initialState = {
  isLoading: false,
  error: null,
  movies: null,
  selected: null,
};

export const App = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, isLoading: true };
    case FETCH_MOVIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
        selected: action.movies[0],
      };
    case FETCH_MOVIES_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case SELECT_MOVIE:
      return { ...state, selected: action.movie };
    default:
      return state;
  }
};

export default App;
