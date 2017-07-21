import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';

const NavLink = ({label, to}) => (
  <RouterLink className="mdl-navigation__link" to={to}>{label}</RouterLink>
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLink;
