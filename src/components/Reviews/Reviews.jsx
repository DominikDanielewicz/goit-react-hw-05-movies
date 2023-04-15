import React from 'react';
import PropTypes from 'prop-types';
import { StyledReview, ReviewCard } from './Reviews.styled';

const Reviews = ({ data }) => {
  return (
    <section>
      {data.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <StyledReview>
          {data.map(review => (
            <ReviewCard key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </ReviewCard>
          ))}
        </StyledReview>
      )}
    </section>
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
