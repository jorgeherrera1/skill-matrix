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
    expect(nextState.size).toBe(4);
    expect(nextState.get(3).toObject()).toEqual({name: 'Jorge', skill: 'JavaScript', level: 3});
  });

  it('should not add new skill', () => {
    const nextState = resources(initialState, addSkill('Jorge', 'Java', 3));

    expect(nextState).toBe(initialState);
    expect(nextState.size).toBe(3);
  });

  it('should update skill level', () => {
    const nextState = resources(initialState, addSkill('Emmanuel', 'Oracle Forms', 4));

    expect(nextState).not.toBe(initialState);
    expect(nextState.size).toBe(3);
    expect(nextState.get(2).toObject()).toEqual({name: 'Emmanuel', skill: 'Oracle Forms', level: 4});

    console.log(nextState.get(2));
  });
});
