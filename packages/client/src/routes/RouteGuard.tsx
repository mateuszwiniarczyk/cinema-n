import { Navigate } from 'react-router-dom';
import { ROUTES } from './routes';

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const auth = false;

  if (!auth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return children;
};

export default RouteGuard;
