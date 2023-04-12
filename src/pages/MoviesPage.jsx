import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'api';
import MoviesList from './../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Search from 'components/Search/Search';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getSearchedMovies = async () => {
      try {
        const fetchedSearchedMovies = await getMovieByQuery.fetchMovieByQuery(
          query
        );
        setSearchedMovies([...fetchedSearchedMovies]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchedMovies(query);
  }, [query]);

  const searchMoviesQuerySubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    setSearchParams({ query: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Search onSubmit={searchMoviesQuerySubmitHandler} />
      {query === '' && (
        <p>There is something with your query. Please provide correct one</p>
      )}
      {searchedMovies.length === 0 && (
        <p>{`We can't find a video for this query: ${query}`}</p>
      )}
      {query && !isLoading && <MoviesList data={searchedMovies} />}
      <Outlet />
      {error && <p>Something went wrong. Try again later</p>}
    </>
  );
};

export default MoviesPage;
