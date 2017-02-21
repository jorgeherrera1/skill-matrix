import {ADD_SKILL} from '../actions/action-types';
import {List, Map} from 'immutable';

const resources = (state = List(), action) => {
  const {type, payload} = action;

  let nextState;

  switch (type) {
    case ADD_SKILL:
      const resourceIndex = state.findIndex((resource) => {
        return resource.get('name') === payload.name && resource.get('skill') === payload.skill;
      });

      if (resourceIndex === -1) {
        nextState = state.push(Map(payload));
      } else {
        nextState = state.update(resourceIndex, (resource) => {
          if (resource.get('level') === payload.level) {
            return resource;
          } else {
            return resource.set('level', payload.level);
          }
        });
      }

      break;

    default:
      nextState = state;
  }

  return nextState;
};

export default resources;
