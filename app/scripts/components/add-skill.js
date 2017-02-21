import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {addSkill} from '../actions/action-creators';


class AddSkill extends Component {

  constructor(props) {
    super(props);

    this.saveSkill = this.saveSkill.bind(this);
  }

  saveSkill(e) {
    e.preventDefault();
    this.props.dispatch(addSkill(this.skill.name, this.skill.value, this.skill.level));
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

AddSkill.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddSkill);