import React, {Component} from 'react';
import NavLink from './nav-link';

class Nav extends Component {

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <NavLink to="/people" label="People" />
          <NavLink to="/skills" label="Skills" />
          <NavLink to="/people/jorge" label="Jorge's profile" />
        </nav>
      </div>
    );
  }

}

export default Nav;
