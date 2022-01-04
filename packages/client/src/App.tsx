import { GlobalStyle } from './lib/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Hello world</h1>
  </ThemeProvider>
);

export default App;
