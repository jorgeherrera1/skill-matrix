import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tag from '../tag/tag';

class SkillLevel extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.level}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Tag text="Jorge Herrera" />
          </li>
          <li className="list-group-item">
            <Tag text="Emmanuel Mendoza" />
          </li>
          <li className="list-group-item">
            <Tag text="Luis Castro" />
          </li>
          <li className="list-group-item">
            <Tag text="Memo Magana" />
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
