import { Navigate } from 'react-router-dom';
import { ROUTES } from './routes';

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const auth = true;

  if (!auth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }

  return children;
};

export default RouteGuard;
