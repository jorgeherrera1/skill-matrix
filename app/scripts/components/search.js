import React, {Component, PropTypes} from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.addSkillToSearch = this.addSkillToSearch.bind(this);
  }

  addSkillToSearch(e) {
    e.preventDefault();

    if (!this.input.value.trim()) {
      return;
    }

    this.props.onSkillSearch(this.input.value);
    this.input.value = '';
  }

  render() {
    const skillsSearched = this.props.skills.map((skill, idx) => (
      <li key={idx}>{skill}</li>
    ));

    return (
      <div>
        <form onSubmit={this.addSkillToSearch}>
          <input type="text" ref={(node) => {this.input = node;}}/>
          <button type="submit">Search</button>
          <br />
          <ul>
            {skillsSearched}
          </ul>
        </form>
      </div>
    );
  }

}

Search.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSkillSearch: PropTypes.func.isRequired
};

export default Search;
