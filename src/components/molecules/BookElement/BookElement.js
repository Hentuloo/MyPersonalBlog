import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Content = styled(Paragraph)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.font.s};
  background-color: ${({ theme }) => theme.graySecondary};
  word-spacing: 4px;
  position: relative;
  z-index: 11;
`;
const ContentWithLink = styled(Paragraph)`
  position: relative;
  margin: 4px 20px;
  padding-right: 100px;
  background-color: ${({ theme }) => theme.graySecondary};
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 1%;
  max-width: 120px;
  max-height: 160px;
  top: 0%;
  border: white 4px solid;
  overflow: hidden;
  z-index: 10;
  img {
    max-width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    top: 40%;
    transform: translateY(-50%);
  }
`;

const SecondTitle = styled(Paragraph)`
  margin: 60px 0px 20px 0px;
  font-size: ${({ theme }) => theme.font.m};
  position: relative;
  padding-right: 130px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    padding-right: 130px;
  }
`;
const Title = styled.h2`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.grayPrimary};
  color: white;
  padding: 3px 40px 8px 15px;
  margin: 0px;
  border-radius: 0% 0% 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const BookWrapper = styled.section`
  border: 8px white solid;
  border-top: 4px solid ${({ theme }) => theme.grayPrimary};
  border-radius: 2%;
  position: relative;
  background-color: ${({ theme }) => theme.graySecondary};
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    padding-right: 130px;
  }
`;
const BookElement = () => {
  return (
    <BookWrapper>
      <Title>Stoicyzm</Title>
      <SecondTitle as="h3" black center>
        Sztuka życia według stoików - Piotr Stankiewicz
      </SecondTitle>
      <ImageWrapper>
        <img src="https://unsplash.it/120/200" alt="my imge" />
      </ImageWrapper>

      <ContentWithLink as="ul">
        <li>Mam ciągle wyobrażenia!!!</li>
        <li>Mam ciągle wyobrażenia!!!</li>
        <li>Mam ciągle wyobrażenia!!!</li>
      </ContentWithLink>
      <Content blackFont>
        Gdy uważasz, że wszystko wokół jest przeciwko tobie. Gdy przemawiają do ciebie stoickie
        cytaty a masz ochotę na więcej (Tak było u mnie). Książka w trakcie czytania
      </Content>
    </BookWrapper>
  );
};
export default BookElement;
