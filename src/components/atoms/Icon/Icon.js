import styled from 'styled-components';

const Icon = styled.div`
  text-align: center;
  cursor: pointer;
  i {
    display: block;
    width: 100%;
    font-size: ${({ theme }) => theme.font.l};
  }
`;
export default Icon;
