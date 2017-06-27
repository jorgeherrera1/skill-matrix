import React, {Component} from 'react';
import styles from './search.css';
import {Input} from 'react-toolbox/lib/input';

class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <Input type='text' label='Search' />
      </div>
    );
  }
}

export default Search;
