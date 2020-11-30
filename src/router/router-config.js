const Login = () => import('../pages/login');

const routerConfig = {
  router: [
    {
      path: '/',
      exact: true,
      component: Login
    },
  ]
};

export default routerConfig;