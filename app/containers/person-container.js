import React from 'react';
import PersonProfile from '../components/person-profile/person-profile';

const PersonContainer = () => (
  <div>
    <PersonProfile
      name="Jorge Herrera"
      jobCode="Tech Lead"
    />
    <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <span className="mdl-chip">
            <span className="mdl-chip__text">Java</span>
          </span>
        </div>
        <div className="mdl-cell mdl-cell--4-col">int</div>
        <div className="mdl-cell mdl-cell--4-col">sr</div>
    </div>
  </div>
);

export default PersonContainer;
