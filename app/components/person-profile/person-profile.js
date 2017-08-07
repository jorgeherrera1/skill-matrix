import React from 'react';
import PropTypes from 'prop-types';

const PersonProfile = ({name}) => (
  <div>
    <h1>{name}</h1>
  </div>
);

PersonProfile.propTypes = {
  name: PropTypes.string.isRequired
};

export default PersonProfile;
