import { useAuth } from 'features/auth/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './routes';

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return children;
};

export default RouteGuard;
