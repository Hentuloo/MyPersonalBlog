import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNumber = styled.div`
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme, white }) => (white ? 'white' : theme.blueThird)};
`;

const NumberPost = ({ number, white }) => {
  let myNumber = '';
  if (number) {
    if (number.toString().length === 1) {
      myNumber = `00${number}`;
    }
    if (number.toString().length === 2) {
      myNumber = `0${number}`;
    }
  }
  return <div>{number && <StyledNumber white={white}>#{myNumber}</StyledNumber>}</div>;
};
NumberPost.propTypes = {
  number: PropTypes.number.isRequired,
  white: PropTypes.bool,
};
NumberPost.defaultProps = {
  white: false,
};
export default NumberPost;
