import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MenuHorizontal from 'components/organism/menu/MenuHorizontal';
import Footer from 'components/organism/Footer/Footer';
import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';
import HelmetSEO from 'components/organism/HelmetSEO/HelmetSEO';
import CookieAlert from '../components/atoms/CookieAlert';

function ViewTemplates({ children, pageTitle, pageTitleAs, contentPageSEO, keywordsSEO }) {
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
          <MenuHorizontal />
          <div id="tresc">{children}</div>
          <Footer />
          <CookieAlert />
        </>
      </ThemeProvider>
    </div>
  );
}

ViewTemplates.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string,
  pageTitleAs: PropTypes.string,
  contentPageSEO: PropTypes.string,
  keywordsSEO: PropTypes.string,
};

ViewTemplates.defaultProps = {
  pageTitle: 'Kamil Chędkowski',
  pageTitleAs: 'header',
  contentPageSEO: null,
  keywordsSEO: null,
};
export default ViewTemplates;
