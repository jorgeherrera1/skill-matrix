import allSkills from '../all-skills';
import {addSkill} from '../../actions/action-creators';

const initialState = ['Java', 'JavaScript'];

describe('add skill', () => {
  it('should add new skill', () => {
    const nextState = allSkills(initialState, addSkill('Oracle'));
    
    expect(nextState).not.toBe(initialState);
    expect(nextState).toEqual(['Java', 'JavaScript', 'Oracle']);
  });

  it('should not add new skill', () => {
    const nextState = allSkills(initialState, addSkill('Java'));
    
    expect(nextState).toBe(initialState);
  });
});
