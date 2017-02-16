import {fromJS} from 'immutable';
import resources from '../resources';
import {addSkill} from '../../actions/action-creators';

const initialState = fromJS([
  {name: 'Jorge', skill: 'Java', level: 3},
  {name: 'Jorge', skill: 'Oracle PLSQL', level: 4},
  {name: 'Emmanuel', skill: 'Oracle Forms', level: 1}
]);

describe('add skill', () => {
  it('should add new skill', () => {
    const nextState = resources(initialState, addSkill('Jorge', 'JavaScript', 3));

    expect(nextState).not.toBe(initialState);
  });

  it('should not add new skill', () => {
    const nextState = resources(initialState, addSkill('Jorge', 'Java', 3));

    expect(nextState).toBe(initialState);
  });

  it('should update skill level', () => {
    const nextState = resources(initialState, addSkill('Emmanuel', 'Oracle Forms', 4));

    expect(nextState).not.toBe(initialState);
  });
});
