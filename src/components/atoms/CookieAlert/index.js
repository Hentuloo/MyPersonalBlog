import React from 'react';
import styled from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const AlertWrapper = styled.div`
  .container {
    width: 100%;
    border: 2px black solid;
    padding: 0px 20px;
    background-color: ${({ theme }) => theme.black};
    color: white;
    text-align: center;
    font-size: ${({ theme }) => theme.font.xs};
    font-weight: ${({ theme }) => theme.font.light};
    color: white;
    z-index: 12;
    position: fixed;
    bottom: 0%;
    a {
      font-size: ${({ theme }) => theme.font.xs};
      font-weight: ${({ theme }) => theme.font.light};
    }
    h3 {
      padding: 2px 0px;
      margin-bottom: 10px;
      border-bottom: 2px solid ${({ theme }) => theme.bluePrimary};
    }
    button {
      width: 100%;
      color: white;
      background-color: ${({ theme }) => theme.bluePrimary};
      margin: 5px 0px;
      padding: 3px;
      border: 0px;
      margin-top: 10px;
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.font.m};
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        background-color: white;
        position: absolute;
        top: calc(50% - 3px);
        left: 10px;
        border-radius: 50%;
        opacity: 0;
      }
      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      width: 300px;
      right: 2%;
      bottom: 10px;
    }
  }
`;
const CookieAlert = () => (
  <>
    <AlertWrapper>
      <CookieConsent
        disableStyles
        location="none"
        containerClasses="container"
        acceptOnScrollPercentage={100}
        cookieName="ChentekWDzialaniu"
        buttonText="Zgadzam się"
        expires={150}
      >
        <Headline as="h3" center black>
          COOKIE:
        </Headline>
        Wykorzystuję pliki cookies w celu prawidłowego działania i analizowania strony, oraz
        zapewniania funkcji społecznościowych. Szczegóły znajdziesz w
        <Paragraph as={Link} to="/regulamin" link>
          polityce prywatności.
        </Paragraph>
      </CookieConsent>
    </AlertWrapper>
  </>
);
export default CookieAlert;
