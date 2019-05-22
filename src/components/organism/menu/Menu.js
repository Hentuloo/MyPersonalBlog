import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import MenuHeader from 'components/molecules/MenuHeader/MenuHeader';
import MenuElements from 'components/molecules/MenuElements/MenuElements';
import MenuSmallIcons from '../../molecules/MenuSmallIcons/MenuSmallIcons';
import Hamburger from '../../atoms/Hamburger/Hamburger';

const StyledHamburger = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  margin: 5px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    opacity: 0;
  }
`;
const StyledMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0%;
  top: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.black};
  text-align: center;
  color: white;
  opacity:0;
  display:none;
  transition: opacity 0.1s linear;
  ${({ active }) =>
    active &&
    css`
      display: flex;
      opacity: 1;
    `}
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 130px;
    opacity: 1;
    display: flex;
  }
`;

const StyledWrapper = styled.div`
  z-index: 100;
  position: relative;
  margin-left: 130px; /* margin-left for content is in PostTemplates */
`;

class Menu extends Component {
  state = {
    active: false,
  };

  handleClickHamburger = () => {
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  render() {
    const { postNumber } = this.props;
    const { active } = this.state;
    return (
      <StyledWrapper active={!!active}>
        <StyledMenuWrapper active={!!active}>
          <div>
            <>
              <MenuHeader postNumber={postNumber} />
            </>
            <>
              <MenuElements />
            </>
          </div>
          <aside>
            <MenuSmallIcons />
          </aside>
        </StyledMenuWrapper>
        <StyledHamburger
          onClick={() => {
            this.handleClickHamburger();
          }}
        >
          <Hamburger active={!!active} />
        </StyledHamburger>
      </StyledWrapper>
    );
  }
}

Menu.propTypes = {
  postNumber: PropTypes.number,
};
Menu.defaultProps = {
  postNumber: null,
};

export default Menu;
