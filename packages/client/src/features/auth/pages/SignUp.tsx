import { useTranslation } from 'react-i18next';
import { ROUTES } from 'routes/routes';
import { Layout } from '../components/Layout';

const SignUp = () => {
  const { t } = useTranslation('translation', { useSuspense: false });

  return (
    <Layout
      title={t('Sign Up')}
      link={ROUTES.SIGN_IN}
      description={t('Already have an account')}
      linkLabel={t('Sign In')}
    >
      <form>
        <input type="text" placeholder="Text" />
      </form>
    </Layout>
  );
};

export default SignUp;
