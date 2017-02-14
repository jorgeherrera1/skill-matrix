import {ADD_SKILL} from '../actions/action-types';
import {Set} from 'immutable';

const allSkills = (state = Set(), action) => {
  const {type, payload} = action;

  let nextState;

  switch (type) {
    case ADD_SKILL:
      nextState = state.add(payload.skill);
      break;

    default:
      nextState = state;
  }

  return nextState;
};

export default allSkills;
