import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/_tag.scss';

class Tag extends Component {

  render() {
    return (
      <span className="tag label label-info">
        <span>{this.props.text}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="remove">
          <i className="glyphicon glyphicon-remove-sign glyphicon-white"></i>
        </a>
      </span>
    );
  }
}

Tag.propTypes = {
  text: PropTypes.string.isRequired
};

export default Tag;
