import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({match}) => (
  <div>
    <h3>Skill: {match.params.skillName}</h3>
  </div>
);

Skill.propTypes = {
  match: PropTypes.object
};

export default Skill;
