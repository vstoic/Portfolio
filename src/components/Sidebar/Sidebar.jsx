import './Sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
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
    </div>
  );
};

export default Sidebar;
