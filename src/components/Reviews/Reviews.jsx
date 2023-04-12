import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {data.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

Reviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
