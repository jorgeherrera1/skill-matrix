import React, {Component} from 'react';
import {BrowserRouter, Route, Link as RouterLink} from 'react-router-dom';
import {AppBar} from 'react-toolbox/lib/app_bar';
import {Layout, NavDrawer, Panel} from 'react-toolbox/lib/layout';
import routes from '../routes';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} exact render={(props) => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawerActive: false
    };
    this.toggleNavDrawerActive = this.toggleNavDrawerActive.bind(this);
  }

  toggleNavDrawerActive() {
    console.log(this);
    this.setState({
      navDrawerActive: !this.state.navDrawerActive
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <NavDrawer
            active={this.state.navDrawerActive}
            onOverlayClick={this.toggleNavDrawerActive}>
            <ul>
              <li><RouterLink to="/">Search</RouterLink></li>
              <li><RouterLink to="/skills">Skills</RouterLink></li>
            </ul>
          </NavDrawer>
          <Panel>
            <AppBar
              leftIcon='menu'
              onLeftIconClick={this.toggleNavDrawerActive}>
            </AppBar>
            <div>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
          </div>
          </Panel>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
