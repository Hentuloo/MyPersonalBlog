import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';

const SearchIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.font.m};
  position: absolute;
  left: 50%;
  top: calc(50% + 0px);
  transform: translate(calc(-50% - 95px), -50%);
  cursor: default;
  color: black;
`;
const SearchInput = styled.input`
  display: block;
  width: 230px;
  position: relative;
  padding: 12px 10px 12px 35px;
  border: 2px black solid;
  border-radius: 30px;
  color: black;
`;
const SearchWrapper = styled.div`
  font-size: ${({ theme }) => theme.font.l};
  position: relative;
  width: auto;
`;
const Search = ({ placeholder, IconType }) => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder={placeholder} />
      <SearchIcon as="i" className={IconType} />
    </SearchWrapper>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  IconType: PropTypes.string,
};
Search.defaultProps = {
  placeholder: 'Tu można wpisać',
  IconType: 'icon-search',
};

export default Search;
