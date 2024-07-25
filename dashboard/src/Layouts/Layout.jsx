import { Outlet } from 'react-router-dom';
import { DashboardLayout } from 'insa_react_ui';
import navItems from '../constants';

const Layout = () => {
  return (
    <DashboardLayout icon="/assets/images/icon.png" navItems={navItems}>
      <Outlet />
    </DashboardLayout>
  );
};

export default Layout;
