import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import MenuHorizontal from 'components/organism/menu/MenuHorizontal';
import Footer from 'components/organism/Footer/Footer';

function PostTemplates({ children }) {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
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
};
export default PostTemplates;
