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
  transform: translateY(-5px);
  font-size: ${({ theme, large }) => (large ? theme.font.xxl : theme.font.xs)};
  span {
    display: block;
    color: ${({ theme }) => theme.graySecondary};
  }
`;

const MenuHeader = ({ number, large }) => {
  return (
    <StyledWrapper>
      {number && <StyledNumber number={number} />}
      <StyledBlogTitle large={large}>
        Chentek w <span>działaniu</span>
      </StyledBlogTitle>
    </StyledWrapper>
  );
};
MenuHeader.propTypes = {
  number: PropTypes.bool,
  large: PropTypes.bool,
};
MenuHeader.defaultProps = {
  number: false,
  large: false,
};

export default MenuHeader;
