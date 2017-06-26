import SearchContainer from './containers/search-container';
import SkillsContainer from './containers/skills-container';

const routes = [
  {
    path: '/',
    component: SearchContainer
  },
  {
    path: '/skills',
    component: SkillsContainer
  }
];

export default routes;
