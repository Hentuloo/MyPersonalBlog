import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  padding: 6px;
  font-size: ${({ theme }) => theme.font.s};
  text-align: ${({ center }) => (center ? `center` : `left`)};

  font-weight: ${({ light, theme }) => (light ? theme.font.light : theme.font.bold)};

  ${({ black }) =>
    black &&
    css`
      background-color: ${({ theme }) => theme.black};
      color: white;
    `}
`;
export default Paragraph;
