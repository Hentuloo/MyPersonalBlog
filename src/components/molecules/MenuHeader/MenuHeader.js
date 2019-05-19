import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NumberPost from 'components/atoms/NumberPost/NumberPost';

const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 5px 0px;
`;
const StyledNumber = styled(NumberPost)`
  width: 100%;
`;
const StyledBlogTitle = styled.div`
  color: ${({ theme }) => theme.blueSecondary};
  width: 100%;
  font-size: ${({ theme }) => theme.font.xs};
  transform: translateY(-5px);
  span {
    display: block;
    color: ${({ theme }) => theme.graySecondary};
  }
`;

const MenuHeader = ({ number }) => {
  return (
    <StyledWrapper>
      <StyledNumber number={number} />
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
  number: null,
};

export default MenuHeader;
