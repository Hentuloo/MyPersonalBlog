import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const StyledNumber = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.xl};
  color: ${({ theme }) => theme.blueThird};
`;
const StyledBlogTitle = styled.div`
  color: ${({ theme }) => theme.blueSecondary};
  width: 100%;
  font-size: ${({ theme }) => theme.font.xs};
  span {
    display: block;
    color: ${({ theme }) => theme.graySecondary};
  }
`;

const MenuHeader = ({ number }) => {
  let myNumber = '';
  if (number.toString().length === 1) {
    myNumber = `00${number}`;
  }
  if (number.toString().length === 2) {
    myNumber = `0${number}`;
  }
  return (
    <StyledWrapper>
      <StyledNumber>#{myNumber}</StyledNumber>
      <StyledBlogTitle>
        Chentek w <span>działaniu</span>
      </StyledBlogTitle>
    </StyledWrapper>
  );
};

MenuHeader.propTypes = {
  number: PropTypes.number,
};
MenuHeader.defaultProps = {
  number: 0,
};

export default MenuHeader;
