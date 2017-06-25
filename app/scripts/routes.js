import React from 'react';
import {Route} from 'react-router-dom';
// import App from './containers/app';
import Skills from './containers/skills';
import Skill from './containers/skill';

export const routes = [{
  path: '/',
  component: Skills,
  routes: [
    {
      path: '/skills',
      component: Skills,
      routes: [
        {
          path: '/skills/:skillName',
          component: Skill
        }
      ]
    }
  ]
}];

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) => {
    console.log(route.routes);
    return (
    <route.component {...props} routes={route.routes} />);
  }}/>
);
