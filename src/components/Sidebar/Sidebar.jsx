import './Sidebar.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' >
        <img src={Logo} alt='logo' />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/" >
          
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;