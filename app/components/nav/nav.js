import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/people">People</Link>
          <Link className="mdl-navigation__link" to="/skills" label="Skills" >Skills</Link>
          <Link className="mdl-navigation__link" to="/people/jorge">Jorge</Link>
        </nav>
      </div>
    );
  }

}

export default Nav;
