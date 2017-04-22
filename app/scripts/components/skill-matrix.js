import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class SkillMatrix extends Component {

  renderResources() {
    return this.props.resources.map((resource, idx) => (
      <li key={idx}>{resource.name},{resource.skill},{resource.level}</li>
    ));
  }

  render() {
    return (
      <div>
        <h2>Skill Matrix</h2>
        <ul>
          {this.renderResources()}
        </ul>
      </div>
    );
  }
}

SkillMatrix.propTypes = {
  resources: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    resources: state.resources.toJS()
  };
};

export default connect(mapStateToProps)(SkillMatrix);
