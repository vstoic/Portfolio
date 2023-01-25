import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
