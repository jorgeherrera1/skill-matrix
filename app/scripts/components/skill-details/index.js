import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SkillInfo from './skill-info';
import SkillLevel from './skill-level';

class SkillDetails extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SkillInfo skill={this.props.skill} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <SkillLevel level="Junior" />
          </div>
          <div className="col-lg-4">
            <SkillLevel level="Intermediate" />
          </div>
          <div className="col-lg-4">
            <SkillLevel level="Senior" />
          </div>
        </div>
      </div>
    );
  }
}

SkillDetails.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillDetails;
