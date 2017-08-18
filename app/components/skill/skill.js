import React from 'react';
import PropTypes from 'prop-types';
import './skill.scss';

const Skill = ({name}) => (
  <span className="mdl-chip mdl-chip--deletable skill">
    <span className="mdl-chip__text">{name}</span>
    <button type="button" className="mdl-chip__action">
      <i className="material-icons">cancel</i>
    </button>
  </span>
);

Skill.propTypes = {
  name: PropTypes.string.isRequired
};

export default Skill;
