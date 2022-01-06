import { GlobalStyle } from './lib/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/styles/theme';
import './lib/i18n';
import { AppRoutes } from './routes';
import { Suspense } from 'react';

const App = () => (
  <Suspense fallback={<h2>Loading</h2>}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  </Suspense>
);

export default App;
