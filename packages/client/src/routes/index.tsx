import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteGuard from './RouteGuard';
import { ROUTES } from './routes';
import { lazy, memo } from 'react';

const Home = lazy(() => import('pages/Home'));
const SignUp = lazy(() => import('features/auth/pages/SignUp'));

export const AppRoutes = memo(() => (
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
      <Route path={ROUTES.SIGN_IN} element={<h1>Sign In</h1>} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
    </Routes>
  </BrowserRouter>
));
