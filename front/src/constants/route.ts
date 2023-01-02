import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import TodoPage from '../pages/TodoPage';

export const ROUTE = {
  NOT_FOUND: {
    path: '*',
    element: NotFoundPage,
    authenticated: null,
  },
  LOGIN: {
    path: '/auth',
    link: '/auth',
    element: LoginPage,
    authenticated: false,
  },
  REGISTER: {
    path: '/auth/register',
    link: '/auth/registar',
    element: RegisterPage,
    authenticated: false,
  },
  TODO: {
    path: '/',
    link: '/',
    element: TodoPage,
    authenticated: true,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
