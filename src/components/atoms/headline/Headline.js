import styled, { css } from 'styled-components';

const H1 = styled.h1`
  width: 100%;
  padding: 4px 0px;
  margin: 0px;
  font-size: ${({ theme, large }) => (large ? theme.font.xl : theme.font.l)};
  color: black;
  background-color: transparent;
  text-align: center;

  ${({ blue }) =>
    blue &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.bluePrimary};
    `}
  ${({ black }) =>
    black &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.black};
    `}
`;
export default H1;
