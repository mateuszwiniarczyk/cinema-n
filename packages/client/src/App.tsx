import { GlobalStyle } from './lib/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from './lib/styles/theme';
import './lib/i18n';
import { AppRoutes } from './routes';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'components/ErrorFallback';
import { queryClient } from 'lib/react-query';

const App = () => (
  <Suspense fallback={<h2>Loading</h2>}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
);

export default App;
