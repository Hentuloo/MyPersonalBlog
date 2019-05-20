import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import Menu from 'components/organism/menu/Menu';
import Footer from 'components/organism/Footer/Footer';

const BackgroundBlocks = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  &::before,
  &::after {
    content: '';
    width: 120vw;
    height: 120vw;
    position: absolute;
    top: 100%;
    left: 100%;
    transform-origin: 50%;
    transform: translate(-50%, -35%) rotate(45deg);
    background-color: ${theme.bluePrimary};
    z-index: -3;
  }
  &::after {
    background-color: ${theme.grayPrimary};
    left: 0%;
    top: 0%;
    transform: translate(-55%, -75%) rotate(45deg);
  }
`;
const Content = styled.div`
  position: relative;
  width: 80%;
  min-height: 80vh;
  margin: 0px auto;
  background-color: ${theme.graySecondary};
  color: black;
  z-index: 1;
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: ${theme.breakPointMobile}) {
    width: calc(100% - 130px);
  }
`;

function PostTemplates({ children }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BackgroundBlocks>
          <Menu />
          <ContentWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
          <Footer />
        </BackgroundBlocks>
      </ThemeProvider>
    </div>
  );
}

PostTemplates.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PostTemplates;
