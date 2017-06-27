import React, {Component} from 'react';
import {Navigation} from 'react-toolbox/lib/navigation';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from 'react-toolbox/lib/link';

class Nav extends Component {
  render() {
    return (
      <Navigation type='vertical'>
        <Link href="/" label="Skills" icon='stars' />
        <Link href="/" label="Resources" icon='face' />
        <ul>
          <li><RouterLink to="/">Search</RouterLink></li>
          <li><RouterLink to="/skills">Skills</RouterLink></li>
        </ul>
      </Navigation>
    );
  }
}

export default Nav;
