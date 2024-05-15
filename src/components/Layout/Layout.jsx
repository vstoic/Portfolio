import './Layout.scss';

import { Outlet } from 'react-router-dom';
// import MobileSideBar from '../Sidebar/MobileSideBar';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '../../assets/MaterialThemes';
import NavBar from '../Navbar/NavBar';

const Layout = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="App">
        {/* <MobileSideBar /> */}
        <NavBar />
        <div className="page">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
