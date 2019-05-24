import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerPseudoElements = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.bluePrimary};
    top: 0%;
    border-radius: 5px;
    transition: transform 0.2s linear;
  }
  &::after {
    top: auto;
    bottom: 0px;
  }
  ${({ active }) =>
    active &&
    css`
      &::before {
        transform: rotate(-45deg) translate(calc(-50% + 16px), 20px);
      }
      &::after {
        transform: rotate(45deg) translate(calc(-50% + 21px), -12px);
      }
    `}
`;

const HamburgerWrapper = styled.div`
  width: 60px;
  height: 45px;
  cursor: pointer;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 85%;
    height: 6px;
    background-color: ${({ theme }) => theme.grayThird};
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.08s linear;
  }
  ${({ active }) =>
    active &&
    css`
      &::before {
        display: none;
      }
    `}
`;
const Hamburger = ({ active }) => {
  return (
    <HamburgerWrapper active={active}>
      <HamburgerPseudoElements active={active} />
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
};
export default Hamburger;
