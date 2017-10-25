import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import { routeReducer } from 'react-router-redux';

export const reduxReducers = combineReducers({
  rootReducer,
  route: routeReducer
});
