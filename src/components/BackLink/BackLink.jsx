import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <AiOutlineArrowLeft size="14" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

export default BackLink;
