import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieByPathname } from '../api';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieCastPage = () => {
  const location = useLocation();
  const [movieAdditionalInfo, setMovieAdditionalInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pathname = location.pathname
    .replace('movies', 'movie')
    .replace('cast', 'credits');

  useEffect(() => {
    const getMovieAdditionalInfo = async () => {
      setIsLoading(true);
      try {
        const fetchedIformation = await getMovieByPathname.fetchMovieByPathname(
          pathname
        );
        if (pathname.includes('credits')) {
          setMovieAdditionalInfo([...fetchedIformation.cast]);
        }
        if (pathname.includes('reviews')) {
          setMovieAdditionalInfo([...fetchedIformation.results]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieAdditionalInfo(pathname);
  }, [pathname]);

  return (
    <main>
      {error && <p>Something went wrong. Try again later</p>}
      {isLoading && <Loader />}
      {!isLoading && pathname.includes('credits') && (
        <Cast data={movieAdditionalInfo} />
      )}
      {!isLoading && pathname.includes('reviews') && (
        <Reviews data={movieAdditionalInfo} />
      )}
    </main>
  );
};

export default MovieCastPage;
