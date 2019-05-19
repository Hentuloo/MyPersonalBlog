import React from 'react';
import styled from 'styled-components';
import MainImage from 'components/atoms/MainImage/MainImage';
import MenuHeader from 'components/molecules/MenuHeader/MenuHeader';

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    height: 100%;
    position: absolute;
    bottom: 0%;
    right: -100px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      right: -200px;
    }
  }
`;
const StyledHeadline = styled.h1`
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 10;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
  padding-top: 40px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.grayPrimary};
  margin-bottom: 50px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    flex-direction: row;
  }
`;

const Baner = () => {
  return (
    <StyledWrapper>
      <StyledHeadline>
        <MenuHeader large as="h1" />
      </StyledHeadline>
      <StyledImageWrapper>
        <MainImage />
      </StyledImageWrapper>
    </StyledWrapper>
  );
};

export default Baner;
