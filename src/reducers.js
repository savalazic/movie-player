// @flow
import { combineReducers } from 'redux';

import app from './App/AppReducer';

const root = combineReducers({
  app,
});

export default root;
