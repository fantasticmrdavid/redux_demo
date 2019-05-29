import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import maps from './maps';

const reducers = history => combineReducers({
  maps,
  router: connectRouter(history),
});

export default reducers;
