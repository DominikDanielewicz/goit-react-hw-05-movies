import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func,
};

export default Search;
