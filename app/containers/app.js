import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/header/header';
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
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Nav />
          <main className="mdl-layout__content">
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route}/>
            ))}
          </main>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
