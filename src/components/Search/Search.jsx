import React from 'react';

const Search = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
