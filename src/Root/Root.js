import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>APP</div>
      </ThemeProvider>
    </div>
  );
}

export default App;
