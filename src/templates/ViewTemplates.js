import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MenuHorizontal from 'components/organism/menu/MenuHorizontal';
import Footer from 'components/organism/Footer/Footer';
import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';

function PostTemplates({ children, pageTitle, pageTitleAs }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <BanerTitle className="focus-only" as={pageTitleAs}>
            {pageTitle}
          </BanerTitle>
          <MenuHorizontal />
          <>{children}</>
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
}

PostTemplates.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string,
  pageTitleAs: PropTypes.string,
};

PostTemplates.defaultProps = {
  pageTitle: 'Kamil Chędkowski',
  pageTitleAs: 'header',
};
export default PostTemplates;
