import {Set, fromJS} from 'immutable';

const resources = fromJS([
  {name: 'Jorge', skill: 'Java', level: 4},
  {name: 'Jorge', skill: 'JavaScript', level: 4},
  {name: 'Jorge', skill: 'Oracle PLSQL', level: 4},
  {name: 'Emmanuel', skill: 'Java', level: 3},
  {name: 'Emmanuel', skill: 'JavaScript', level: 3},
  {name: 'Emmanuel', skill: 'Oracle PLSQL', level: 4},
  {name: 'Emmanuel', skill: 'Oracle Forms', level: 4}
]);

const allSkills = Set.of('Java', 'JavaScript', 'Oracle');
const initialState = {resources, allSkills};

export default initialState;
