const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/home',
    component: '/Home',
  },
  {
    // path: '*',
    component: '/page404',
    title: '404',
  },
];

export default routes;
