import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';

const ListElement = styled(Icon)`
  transition: transform 0.4s linear;
  cursor: pointer;
  text-align: center;
  padding: 4px 0px;
  &:hover {
    transform: translateY(4px);
    color: ${({ theme }) => theme.blueThird};
  }
`;
const TitleElement = styled.div`
  margin-top: -7px;
`;

const ListWrapper = styled.nav`
  list-style: none;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    ${({ horizontal }) =>
      horizontal &&
      css`
        display: flex;
        & > li {
          flex-basis: 20%;
        }
      `}
  }
`;

const MenuElements = ({ horizontal }) => {
  return (
    <ListWrapper horizontal={horizontal}>
      <ListElement as="li">
        <i className="icon-home" />
        <TitleElement>Strona główna</TitleElement>
      </ListElement>
      <ListElement as="li">
        <i className="icon-user" />
        <TitleElement>Kim jestem?</TitleElement>
      </ListElement>
      <ListElement as="li">
        <i className="icon-pinboard" />
        <TitleElement>Wszystkie wpisy</TitleElement>
      </ListElement>
      <ListElement as="li">
        <i className="icon-check-1" />
        <TitleElement>Trzy poziomy</TitleElement>
      </ListElement>
      <ListElement as="li">
        <i className="icon-book" />
        <TitleElement>Książki</TitleElement>
      </ListElement>
    </ListWrapper>
  );
};
MenuElements.propTypes = {
  horizontal: PropTypes.bool,
};
MenuElements.defaultProps = {
  horizontal: false,
};
export default MenuElements;
