import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #ffa500;
  }
`;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft size="14" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node.isRequired,
};

export default BackLink;
