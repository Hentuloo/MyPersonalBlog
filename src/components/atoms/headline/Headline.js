import styled, { css } from 'styled-components';

const H1 = styled.h1`
  width: 100%;
  padding: 4px 0px;
  margin: 0px;
  color: white;
  background-color: transparent;
  text-align: center;

  font-size: ${({ theme }) => theme.font.l};
  color:  ${({ blackFont, theme }) => (blackFont ? theme.black : 'white')};
  ${({ theme, large }) => large && `font-size:${theme.font.xl}`}
  ${({ theme, small }) => small && `font-size:${theme.font.xs}`}
  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.bluePrimary};
    `}
  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.black};
    `}
     ${({ gray }) =>
       gray &&
       css`
         background-color: ${({ theme }) => theme.grayThird};
       `}
`;
export default H1;
