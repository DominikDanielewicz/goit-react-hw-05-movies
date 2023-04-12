import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <AiOutlineArrowLeft size="14" />
      {children}
    </Link>
  );
};

export default BackLink;
