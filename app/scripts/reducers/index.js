import {combineReducers} from 'redux';
import resources from './resources';
import allSkills from './all-skills';

const reducers = combineReducers({resources, allSkills});

export default reducers;
