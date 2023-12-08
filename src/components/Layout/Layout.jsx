import './Layout.scss';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import MobileSideBar from '../Sidebar/MobileSideBar';

const Layout = () => {
  return (
    <div className='App'>
      {/* <MobileSideBar /> */}
      <Sidebar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
