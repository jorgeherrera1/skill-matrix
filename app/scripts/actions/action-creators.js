import {SEARCH_SKILL} from './action-types';

export const searchSkill = (skill) => {
  return {
    type: SEARCH_SKILL,
    payload: {skill}
  };
};
