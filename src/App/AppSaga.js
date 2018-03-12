import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCEEDED,
  FETCH_MOVIES_FAILED,
} from './AppAction';

import callApi from '../Service/Api';

export function* fetchMovies() {
  try {
    yield delay(2000);
    const movies = yield call(callApi);
    yield put({
      type: FETCH_MOVIES_SUCCEEDED,
      movies: movies.response.body,
    });
  } catch (error) {
    yield put({ type: FETCH_MOVIES_FAILED, error });
  }
}

export default function* AppSaga() {
  yield takeEvery(FETCH_MOVIES, fetchMovies);
}
