import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => (
  <div data-testid="wrapper" className="wrapper">
    <NavBar />
    <Outlet />
  </div>
);

export default Layout;
