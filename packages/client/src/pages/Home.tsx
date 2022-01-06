import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation('translation', { useSuspense: false });

  const changeLng = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.currentTarget.value, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  return (
    <>
      <h1>{t('title')}</h1>
      <select onChange={changeLng} value={i18n.language}>
        <option value="pl-PL">PL</option>
        <option value="en">EN</option>
      </select>
    </>
  );
};

export default memo(Home);
