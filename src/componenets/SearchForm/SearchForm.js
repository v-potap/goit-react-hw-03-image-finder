import React from 'react';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';

function SearchForm({ execOnSubmit }) {
  return (
    <form className={styles.searchForm} onSubmit={execOnSubmit}>
      <input type="text" autoComplete="off" placeholder="Search images..." />
    </form>
  );
}

SearchForm.propTypes = {
  execOnSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
