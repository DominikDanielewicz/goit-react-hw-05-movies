import { Link, useLocation } from 'react-router-dom';

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

export default MoviesList;
