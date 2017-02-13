import React, {Component} from 'react';
import {connect} from 'react-redux';

class SkillMatrix extends Component {

  render() {
    return (
      <div>
        <h2>Skill Matrix</h2>
      </div>
    );
  }
}

export default connect()(SkillMatrix);
