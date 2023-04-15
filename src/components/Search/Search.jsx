import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearch, SearchInput, SearchButton } from './Search.styled';

const Search = ({ onSubmit }) => {
  return (
    <StyledSearch onSubmit={onSubmit}>
      <SearchInput
        type="text"
        name="query"
        placeholder="Enter the name of the movie here..."
      />
      <SearchButton type="submit">Search</SearchButton>
    </StyledSearch>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func,
};

export default Search;
