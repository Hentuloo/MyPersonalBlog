import styled, { css } from 'styled-components';

const Hamburger = styled.h1`
  width: 50px;
  height: 40px;
  background-color: green;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      background-color: white;
    `}
`;
export default Hamburger;
