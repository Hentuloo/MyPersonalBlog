import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding: 4px;

  font-size: ${({ theme }) => theme.font.s};
  text-align: ${({ center }) => (center ? `center` : `left`)};
  font-weight: ${({ light, theme }) => (light ? theme.font.light : theme.font.bold)};
  text-decoration-line: ${({ done }) => (done ? `line-through` : `none`)};
  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.black};
      color: white;
    `};
  ${({ link }) =>
    link &&
    css`
      text-decoration-line: underline;
      cursor: pointer;
      color: ${({ theme }) => theme.blueThird};
    `};
`;
export default Paragraph;
