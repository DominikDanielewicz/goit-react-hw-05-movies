import React from 'react';
import Placeholder from 'images/placeholder.jpg';
import PropTypes from 'prop-types';

const Cast = ({ data }) => {
  return (
    <ul>
      {data.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : Placeholder
            }
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

export default Cast;
