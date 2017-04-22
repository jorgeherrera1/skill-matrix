import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class ResourceList extends Component {

  render() {
    return (
      <div>test</div>
    );
  }
}

ResourceList.propTypes = {
  resources: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    resources: state.resources.toJS()
  };
};

export default connect(mapStateToProps)(ResourceList);
