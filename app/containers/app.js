import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from '../components/nav/nav';
import routes from '../routes';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )} />
);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <div>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
