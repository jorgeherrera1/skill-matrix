import {ADD_SKILL} from './action-types';

export const addSkill = (name, skill, level) => {
  return {
    type: ADD_SKILL,
    payload: {name, skill, level}
  };
};
