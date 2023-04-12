import React from 'react';

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

export default Reviews;
