import React from 'react';
import PersonProfile from '../components/person-profile/person-profile';
import Skill from '../components/skill/skill';

const PersonContainer = () => (
  <div>
    <PersonProfile
      name="Jorge Herrera"
      jobCode="Tech Lead"
    />
    <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--4-col">
          <Skill name="Java" />
          <Skill name="Oracle PLSQL" />
          <Skill name="Visual Basic" />
          <Skill name="Linux" />
          <Skill name="Windows" />
          <Skill name="Mac OS X" />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <Skill name=".NET" />
          <Skill name="SharePoint" />
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <Skill name="Angular 4" />
          <Skill name="Redux" />
        </div>
    </div>
  </div>
);

export default PersonContainer;
