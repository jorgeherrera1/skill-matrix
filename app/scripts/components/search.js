import React, {PropTypes} from 'react';

const Search = ({skills, onSkillSearch}) => {
  let input;

  const skillsSearched = skills.map((skill, idx) => (
    <li key={idx}>{skill}</li>
  ));

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        onSkillSearch(input.value);
        input.value = '';
      }}>
        <input type="text" ref={(node) => {
          input = node;
        }}/>
        <button type="submit">Search</button>
        <br />
        <ul>
          {skillsSearched}
        </ul>
      </form>
    </div>
  );
};

Search.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSkillSearch: PropTypes.func.isRequired
};

export default Search;
