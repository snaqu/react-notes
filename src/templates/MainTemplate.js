import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

MainTemplate.propTypes = {
  children: propTypes.element.isRequired,
};
export default MainTemplate;
