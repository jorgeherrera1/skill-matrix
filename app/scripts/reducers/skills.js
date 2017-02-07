import {SEARCH_SKILL} from '../actions/action-types';

const skills = (state = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case SEARCH_SKILL:
      return [...state, payload.skill];

    default:
      return state;
  }
};

export default skills;
