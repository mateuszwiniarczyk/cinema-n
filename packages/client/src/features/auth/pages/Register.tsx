import { RegisterForm } from 'features/auth/components/RegisterForm';
import { useTranslation } from 'react-i18next';
import { ROUTES } from 'routes/routes';
import { Layout } from '../components/Layout';

const Register = () => {
  const { t } = useTranslation('translation', { useSuspense: false });

  return (
    <Layout
      title={t('Register')}
      link={ROUTES.LOGIN}
      description={t('Already have an account')}
      linkLabel={t('Login')}
    >
      <RegisterForm />
    </Layout>
  );
};

export default Register;
