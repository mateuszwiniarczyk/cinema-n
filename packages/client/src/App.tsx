import { GlobalStyle } from './lib/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/styles/theme';
import './lib/i18n';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation('translation', { useSuspense: false });

  const changeLng = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.currentTarget.value, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>{t('title')}</h1>
      <select onChange={changeLng} value={i18n.language}>
        <option value="pl-PL">PL</option>
        <option value="en">EN</option>
      </select>
    </ThemeProvider>
  );
};

export default App;
