import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class SkillList extends Component {

  render() {
    const skills = this.props.skills.map((skill) => (
        <li key={skill}>{skill}</li>
      )
    );

    return (
      <div>
        <h2>Skill List</h2>
        <ul>
          {skills}
        </ul>
      </div>
    );
  }
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    skills: state.allSkills
  };
};

export default connect(mapStateToProps)(SkillList);
