import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addSkill} from '../actions/action-creators';


class AddSkill extends Component {

  constructor(props) {
    super(props);

    this.saveSkill = this.saveSkill.bind(this);
  }

  saveSkill(e) {
    e.preventDefault();
    this.props.dispatch(addSkill(this.name.value, this.skill.value, this.level.value));
  }

  render() {
    return (
      <div>
        <h2>Add Skill</h2>
        <form onSubmit={this.saveSkill}>
          <label>
            Name:
            <input type="text" ref={(node) => {this.name = node;}} />
          </label>
          <label>
            Skill:
            <input type="text" ref={(node) => {this.skill = node;}} />
          </label>
          <label>
            Level:
            <input type="text" ref={(node) => {this.level = node;}} />
          </label>
          <input className="btn btn-default" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddSkill.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddSkill);
