import {connect} from 'react-redux';
import {searchSkill} from '../actions/action-creators';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    skills: state.skills
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSkillSearch: (skill) => {
      dispatch(searchSkill(skill));
    }
  };
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
