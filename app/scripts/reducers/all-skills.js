import {ADD_SKILL} from '../actions/action-types';

const allSkills = (state = [], action) => {
  const {type, payload} = action;

  let nextState;

  switch (type) {
    case ADD_SKILL:
      if (!state.find((skill) => skill === payload.skill)) {
        nextState = [...state, payload.skill];
        break;
      }

    default:
      nextState = state;
  }

  return nextState;
};

export default allSkills;
