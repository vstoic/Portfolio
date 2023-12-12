import './Sidebar.scss';
import { Link} from 'react-router-dom';
import MobileSideBar from './MobileSideBar';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div className="mobile-container">
        <MobileSideBar />
        <Link className="logo" to="/">
          {/* <img src={Logo} alt="logo" /> */}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
