import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import SEO from '../../components/atoms/SEO/SEO';
import { mainTheme } from '../../theme/mainTheme';
import { Wrapper, Card } from './MainTemplate.styles';

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainTemplate: React.FC<Props> = ({ title, children }) => (
  <>
    <SEO title={title} />
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <Wrapper>
        <Card>{children}</Card>
      </Wrapper>
    </ThemeProvider>
  </>
);
export default MainTemplate;
