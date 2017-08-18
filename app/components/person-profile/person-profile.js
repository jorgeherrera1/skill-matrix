import React from 'react';
import PropTypes from 'prop-types';
import './person-profile.scss';

const PersonProfile = ({name, jobCode}) => (
  <div className="person-profile">
    <h1 className="person-profile__name">{name}</h1>
    <p>{jobCode}</p>
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar">
        <a href="#starks-panel" className="mdl-tabs__tab is-active">Skills</a>
        <a href="#lannisters-panel" className="mdl-tabs__tab">Bookings</a>
        <a href="#targaryens-panel" className="mdl-tabs__tab">Timesheets</a>
      </div>
    </div>
  </div>
);

PersonProfile.propTypes = {
  name: PropTypes.string.isRequired,
  jobCode: PropTypes.string.isRequired
};

export default PersonProfile;
