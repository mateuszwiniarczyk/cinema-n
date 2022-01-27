import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteGuard from './RouteGuard';
import { ROUTES } from './routes';
import { lazy, memo } from 'react';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('features/auth/pages/Register'));

export const AppRoutes = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        />
        <Route path={ROUTES.LOGIN} element={<h1>Login</h1>} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
});
