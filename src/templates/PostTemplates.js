import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import Menu from 'components/organism/menu/Menu';
import Footer from 'components/organism/Footer/Footer';
import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';
import HelmetSEO from 'components/organism/HelmetSEO/HelmetSEO';
import CookieAlert from '../components/atoms/CookieAlert';

const BackgroundBlocks = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
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
  width: 97%;
  min-height: 80vh;
  margin: 0px auto 200px auto;
  background-color: ${theme.graySecondary};
  color: black;
  z-index: 1;
  ${({ transparentContent }) =>
    transparentContent &&
    css`
      background-color: transparent;
    `}
    @media (min-width: ${theme.breakPointMobile}) {
       width: 90%;
    }
`;
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 60px; /* because there is menu */
  @media (min-width: ${theme.breakPointMobile}) {
    width: calc(100% - 130px);
    margin-left: 130px; /* because there is menu */
  }
`;

const PostTemplates = ({
  contentPageSEO,
  keywordsSEO,
  children,
  pageTitle,
  pageTitleAs,
  transparentContent,
  postNumber,
}) => {
  return (
    <div>
      <HelmetSEO
        titlePageSEO={pageTitle}
        contentPageSEO={contentPageSEO}
        keywordsSEO={keywordsSEO}
      />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <BanerTitle className="focus-only" as={pageTitleAs}>
            {pageTitle}
          </BanerTitle>
          <BackgroundBlocks />

          <Menu postNumber={postNumber} />
          <ContentWrapper>
            <Content transparentContent={transparentContent} id="tresc">
              {children}
            </Content>
            <Footer />
          </ContentWrapper>
          <CookieAlert />
        </>
      </ThemeProvider>
    </div>
  );
};

PostTemplates.propTypes = {
  contentPageSEO: PropTypes.string,
  keywordsSEO: PropTypes.string,
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string,
  pageTitleAs: PropTypes.string,
  transparentContent: PropTypes.bool,
  postNumber: PropTypes.number,
};

PostTemplates.defaultProps = {
  contentPageSEO: null,
  keywordsSEO: null,
  pageTitle: 'Kamil Chędkowski',
  pageTitleAs: 'header',
  transparentContent: false,
  postNumber: null,
};
export default PostTemplates;
