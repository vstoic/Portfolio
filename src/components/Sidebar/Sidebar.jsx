import './Sidebar.scss';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowSidebar(false)}>
        <img src={Logo} alt="logo" />
      </Link>
      <nav className={showSidebar ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <HomeOutlinedIcon
            sx={{
              fontSize: 32,
              color: '#4d4d4e',
            }}
          />
        </NavLink>
        <NavLink exact="true" activeclassname="about-link" to="/about">
          <PermIdentityIcon sx={{ fontSize: 34, color: '#4d4d4e' }} />
        </NavLink>
        <NavLink exact="true" activeclassname="project-link" to="/project">
          <AccountTreeOutlinedIcon sx={{ fontSize: 32, color: '#4d4d4e' }} />
        </NavLink>
        <NavLink exact="true" activeclassname="contact-link" to="/contact">
          <EmailOutlinedIcon sx={{ fontSize: 32, color: '#4d4d4e' }} />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowSidebar(false)}
          icon={faClose}
          size="3x"
          color="#4d4d4e"
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/victorcheng3/"
          >
            <GitHubIcon sx={{ fontSize: 22, color: '#4d4d4e' }} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/vstoic">
            <LinkedInIcon sx={{ fontSize: 22, color: '#4d4d4e' }} />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowSidebar(true)}
        icon={faBars}
        color="#4d4d4e"
        size="3x"
        className='menu-icon'
      />
    </div>
  );
};

export default Sidebar;
