import {Set} from 'immutable';
import allSkills from '../all-skills';
import {addSkill} from '../../actions/action-creators';

const initialState = Set.of('Java', 'JavaScript');

describe('add skill', () => {
  it('should add new skill', () => {
    const nextState = allSkills(initialState, addSkill(undefined, 'Oracle', undefined));
    
    expect(nextState).not.toBe(initialState);
    expect(nextState.equals(Set.of('Java', 'Oracle', 'JavaScript'))).toBeTruthy();
  });

  it('should not add new skill', () => {
    const nextState = allSkills(initialState, addSkill(undefined, 'Java', undefined));
    
    expect(nextState).toBe(initialState);
  });
});
