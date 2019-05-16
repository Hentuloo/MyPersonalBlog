import React from 'react';
import styled from 'styled-components';

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
`;

const MenuElements = () => {
  return (
    <ListWrapper>
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

export default MenuElements;
