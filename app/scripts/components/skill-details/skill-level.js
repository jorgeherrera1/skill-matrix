import React, {Component, PropTypes} from 'react';

class SkillLevel extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.level}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Jorge Herrera
          </li>
          <li className="list-group-item">
            Emmanuel Mendoza
          </li>
        </ul>
      </div>
    );
  }
}

SkillLevel.propTypes = {
  level: PropTypes.string.isRequired
};

export default SkillLevel;
