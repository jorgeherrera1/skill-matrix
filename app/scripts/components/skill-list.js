import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class SkillList extends Component {

  render() {
    const skills = this.props.skills.map((skill) => (
        <a key={skill} href="#" className="list-group-item">
          {skill}
          <span className="badge">5</span>
        </a>
      )
    );

    return (
      <div>
        <h2>Skill List</h2>
        <div className="list-group">
          {skills}
        </div>
      </div>
    );
  }
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    skills: state.allSkills.toArray()
  };
};

export default connect(mapStateToProps)(SkillList);
