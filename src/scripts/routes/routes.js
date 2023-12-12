import Welcome from '../views/pages/welcome';
import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Chart from '../views/pages/chart';
import Mitra from '../views/pages/mitra';
import About from '../views/pages/about';

const routes = {
  '/': Welcome, // default page
  '/': Home,
  '/detail/:id': Detail,
  '/chart': Chart,
  '/mitra': Mitra,
  '/about': About,
};

export default routes;
