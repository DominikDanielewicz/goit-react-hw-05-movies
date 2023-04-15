import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Placeholder from 'images/placeholder.jpg';
import {
  Container,
  StyledMoviesList,
  MoviesListCard,
  MoviesListImage,
  MoviesListTitle,
} from './MoviesList.styled';

const MoviesList = ({ data }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const shortenedTitle = movietitle => {
    let title = movietitle;
    if (title.length > 30) {
      const lastSpaceIndex = title.lastIndexOf(' ', 32);
      title = title.slice(0, lastSpaceIndex) + '...';
    }
    return title;
  };

  return (
    <Container>
      <StyledMoviesList>
        {data.map(movie => (
          <MoviesListCard key={movie.id}>
            <Link
              to={pathname === '/' ? `movies/${movie.id}` : `${movie.id}`}
              state={{ from: location }}
            >
              <MoviesListImage
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : Placeholder
                }
                alt={movie.original_title}
              />
              <MoviesListTitle>{shortenedTitle(movie.title)}</MoviesListTitle>
            </Link>
          </MoviesListCard>
        ))}
      </StyledMoviesList>
    </Container>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default MoviesList;
