import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import MobileSideBar from './MobileSideBar';

const Sidebar = () => {
  const hideSidebar = false;

  return (
    <div className="nav-bar">
      <div className="mobile-container">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <MobileSideBar />
      </div>

      <div className={hideSidebar ? 'mobile-show' : 'normal-sidebar'}>
        <div className="nav-middle">
          <NavLink exact="true" activeClassName="home-link active" to="/">
            <HomeOutlinedIcon sx={{ fontSize: 38, color: '#4d4d4e' }} />
            <p className="home-text">Home</p>
          </NavLink>
          <NavLink exact="true" activeClassName="about-link active" to="/about">
            <PermIdentityIcon sx={{ fontSize: 40, color: '#4d4d4e' }} />
            <p>About</p>
          </NavLink>
          <NavLink exact="true" activeClassName="project-link active" to="/project">
            <AccountTreeOutlinedIcon sx={{ fontSize: 37, color: '#4d4d4e' }} />
            <p>Projects</p>
          </NavLink>
          <NavLink exact="true" activeClassName="contact-link active" to="/contact">
            <EmailOutlinedIcon sx={{ fontSize: 37, color: '#4d4d4e' }} />
            <p>Contact</p>
          </NavLink>
        </div>
      </div>

      <div className="contact-links">
        <a target="_blank" rel="noreferrer" href="https://github.com/vstoic">
          <GitHubIcon sx={{ fontSize: 23, color: '#4d4d4e' }} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/victorcheng3/"
        >
          <LinkedInIcon sx={{ fontSize: 23, color: '#4d4d4e' }} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
