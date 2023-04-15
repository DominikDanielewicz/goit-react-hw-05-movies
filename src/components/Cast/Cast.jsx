import React from 'react';
import Placeholder from 'images/placeholder.jpg';
import PropTypes from 'prop-types';
import {
  StyledCast,
  CastCard,
  CastImage,
  CastName,
  CastRole,
} from './Cast.styled';

const Cast = ({ data }) => {
  return (
    <section>
      <StyledCast>
        {data.map(actor => (
          <CastCard key={actor.id}>
            <CastImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : Placeholder
              }
              alt={actor.name}
            />
            <CastName>{actor.name}</CastName>
            <CastRole>Character: {actor.character}</CastRole>
          </CastCard>
        ))}
      </StyledCast>
    </section>
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
