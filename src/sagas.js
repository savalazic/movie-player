// @flow
import { all, fork } from 'redux-saga/effects';

import AppSaga from './App/AppSaga';

export default function* rootSaga(): Generator<*, *, *> {
  yield all([fork(AppSaga)]);
}
