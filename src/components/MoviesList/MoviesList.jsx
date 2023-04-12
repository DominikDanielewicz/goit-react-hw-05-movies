import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ data }) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          <Link
            to={pathname === '/' ? `movies/${movie.id}` : `${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
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
