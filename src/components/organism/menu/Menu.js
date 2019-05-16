import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import MenuHeader from 'components/molecules/MenuHeader/MenuHeader';
import MenuElements from 'components/molecules/MenuElements/MenuElements';
import MenuSmallIcons from '../../molecules/MenuSmallIcons/MenuSmallIcons';
import Hamburger from '../../atoms/Hamburger/Hamburger';

const StyledHamburger = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    display: none;
  }
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0%;
  top: 0%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.menuBG};
  text-align: center;
  color: white;
  ${({ active }) =>
    active &&
    css`
      display: flex;
    `}
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 130px;
    display: flex;
  }
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
    const { active } = this.state;
    return (
      <>
        <StyledWrapper active={active ? 'active' : ''}>
          <div>
            <>
              <MenuHeader />
            </>
            <>
              <MenuElements />
            </>
          </div>
          <aside>
            <MenuSmallIcons />
          </aside>
        </StyledWrapper>
        <StyledHamburger>
          <Hamburger
            onClick={() => {
              this.handleClickHamburger();
            }}
            active={!!active}
          />
        </StyledHamburger>
      </>
    );
  }
}

export default Menu;
