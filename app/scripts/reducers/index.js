import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import skills from './skills';

const reducers = combineReducers({
  skills,
  router: routerReducer
});

export default reducers;
