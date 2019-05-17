import React from 'react';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  a {
    display: block;
    flex-basis: 33.333%;
    &:hover {
      color: ${({ theme }) => theme.blueThird};
    }
  }
`;

const MenuHeader = () => (
  <StyledWrapper>
    <Icon className="icon-facebook" as="a" aria-label="facebook link" />
    <Icon className="icon-medium" as="a" aria-label="medium link" />
    <Icon className="icon-instagram" as="a" aria-label="instagram link" />
  </StyledWrapper>
);

export default MenuHeader;
