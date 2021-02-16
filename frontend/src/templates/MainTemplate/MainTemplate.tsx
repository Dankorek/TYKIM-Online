import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import { theme } from '../../assets/styles/theme';

interface Props {
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  </>
);
export default MainTemplate;
