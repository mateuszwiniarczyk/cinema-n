import { GlobalStyle } from './lib/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/styles/theme';
import './lib/i18n';
import { AppRoutes } from './routes';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback';

const App = () => (
  <Suspense fallback={<h2>Loading</h2>}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </ErrorBoundary>
  </Suspense>
);

export default App;
