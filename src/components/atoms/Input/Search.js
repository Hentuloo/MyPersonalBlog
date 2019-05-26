import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'components/atoms/Icon/Icon';

const SearchButton = styled.button`
  height: 90%;
  background-color: ${({ theme }) => theme.grayPrimary};
  padding: 6px 6px;
  margin: 2px;
  border: 3px white solid;
  border-radius: 30px 0px 0px 30px;
  &:hover {
    background-color: ${({ theme }) => theme.grayThird};
  }
`;
const SearchLink = styled(Link)`
  position: absolute;
  height: 100%;
  left: calc(50% - 125px);
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
const SearchIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.font.m};
  color: white;
`;
const SearchInput = styled.input`
  display: block;
  width: 250px;
  min-height: 51px;
  position: relative;
  padding: 12px 10px 12px 60px;
  border: 2px black solid;
  border-radius: 30px;
  color: black;
  margin: 0px auto;
`;
const FormWrapper = styled.form`
  display: block;
  position: relative;
  font-size: ${({ theme }) => theme.font.l};
`;
class Search extends Component {
  state = {
    searched: '',
  };

  onSubmit = e => {
    const keyword = e.target.elements.keyword.value;
    this.setState({ searched: keyword });
  };

  handleInput = e => {
    const keyword = e.target.value;
    this.setState({ searched: keyword });
  };

  render() {
    const { placeholder, IconType } = this.props;
    const { searched } = this.state;
    return (
      <FormWrapper role="search" method="get" action="/" onSubmit={this.onSubmit}>
        <SearchInput
          type="text"
          placeholder={placeholder}
          value={searched}
          onChange={this.handleInput}
        />
        <SearchLink to={`/szukaj/${searched}`}>
          <SearchButton type="submit">
            <SearchIcon as="i" className={IconType} />
          </SearchButton>
        </SearchLink>
      </FormWrapper>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  IconType: PropTypes.string,
};
Search.defaultProps = {
  placeholder: 'Tu można wpisać',
  IconType: 'icon-search',
};

export default Search;
