import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNumber = styled.div`
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme, white }) => (white ? 'white' : theme.blueThird)};
`;

const NumberPost = ({ postNumber, white }) => {
  let myNumber = '';
  if (postNumber) {
    if (postNumber.toString().length === 1) {
      myNumber = `00${postNumber}`;
    }
    if (postNumber.toString().length === 2) {
      myNumber = `0${postNumber}`;
    }
  }
  return <div>{postNumber && <StyledNumber white={white}>#{myNumber}</StyledNumber>}</div>;
};
NumberPost.propTypes = {
  postNumber: PropTypes.number,
  white: PropTypes.bool,
};
NumberPost.defaultProps = {
  white: false,
  postNumber: null,
};
export default NumberPost;
