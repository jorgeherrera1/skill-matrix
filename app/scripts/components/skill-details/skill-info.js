import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SkillInfo extends Component {

  render() {
    return (
      <div className="page-header">
        <h1>{this.props.skill}</h1>
        <div>
          <span className="label label-info">Database</span>&nbsp;
          <span className="label label-info">NoSQL</span>
        </div>
      </div>
    );
  }
}

SkillInfo.propTypes = {
  skill: PropTypes.string.isRequired
};

export default SkillInfo;
