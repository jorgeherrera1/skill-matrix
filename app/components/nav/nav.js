import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
        <ul>
          <li><RouterLink to="/">Search</RouterLink></li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
        </ul>
      </div>
    );
  }

}

export default Nav;
