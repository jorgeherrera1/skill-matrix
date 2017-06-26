import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import routes from '../routes';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Search</Link></li>
            <li><Link to="/skills">Skills</Link></li>
          </ul>
          <hr/>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
