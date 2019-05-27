import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding: 4px;
  margin: 0px;
  font-size: ${({ theme }) => theme.font.s};
  text-align: ${({ center }) => (center ? `center` : `left`)};
  font-weight: ${({ light, theme }) => (light ? theme.font.light : theme.font.bold)};
  text-decoration-line: ${({ done }) => (done ? `line-through` : `none`)};
  color: ${({ theme, blackFont }) => (blackFont ? theme.black : 'white')};
  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.black};
    `};
  ${({ link }) =>
    link &&
    css`
      text-decoration-line: underline;
      cursor: pointer;
    `};
  ${({ blue }) =>
    blue &&
    css`
      background-color: ${({ theme }) => theme.bluePrimary};
    `};
  ${({ blockquote }) =>
    blockquote &&
    css`
      position: relative;
      i {
        content: "''";
        position: absolute;
        top: 0%;
        right: 0%;
        opacity: 0.4;
        color: ${({ theme }) => theme.blueSecondary};
        line-height: ${({ theme }) => theme.font.xxl};
        font-size: ${({ theme }) => theme.font.xxl};
      }
    `};
`;
export default Paragraph;
