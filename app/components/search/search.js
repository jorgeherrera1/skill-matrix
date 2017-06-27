import React, {Component} from 'react';
import styles from './search.css';

class Search extends Component {
  render() {
    return (
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default Search;
