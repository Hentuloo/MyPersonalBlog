import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'components/atoms/Icon/Icon';

const ListElement = styled(Icon)`
  transition: transform 0.4s linear;
  cursor: pointer;
  text-align: center;
  padding: 4px 0px;

  &:hover {
    transform: translateY(4px);
    color: ${({ theme }) => theme.blueSecondary};
  }
  a {
    text-decoration: none;
    color: inherit;
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
      <a href="#tresc" className="focus-only">
        Przejdź do treści
      </a>
      <ListElement as="li">
        <Link to="/">
          <i className="icon-home" />
          <TitleElement>Strona główna</TitleElement>
        </Link>
      </ListElement>
      <ListElement as="li">
        <Link to="/kim-jestem">
          <i className="icon-user" />
          <TitleElement>Kim jestem?</TitleElement>
        </Link>
      </ListElement>
      <ListElement as="li">
        <Link to="/wszystkie-wpisy">
          <i className="icon-pinboard" />
          <TitleElement>Wszystkie wpisy</TitleElement>
        </Link>
      </ListElement>
      <ListElement as="li">
        <Link to="/trzy-poziomy">
          <i className="icon-check" />
          <TitleElement>Trzy poziomy</TitleElement>
        </Link>
      </ListElement>
      <ListElement as="li">
        <Link to="/ksiazki">
          <i className="icon-book" />
          <TitleElement>Książki</TitleElement>
        </Link>
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
