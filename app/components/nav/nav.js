import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';

class Nav extends Component {

  render() {
    return (
      <ul>
        <li><RouterLink to="/">Search</RouterLink></li>
        <li><RouterLink to="/skills">Skills</RouterLink></li>
      </ul>
    );
  }

}

export default Nav;
