// import './mobileSideBar.scss';
import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { fontSize } from '@mui/system';

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ fontSize: 32, color: '#4d4d4e' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{
                    fontSize: 'large',
                    color: '#4d4d4e',
                    textDecoration: 'false',
                  }}
                >
                  Home
                </Typography>
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="about-link"
          to="/about"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PermIdentityIcon sx={{ fontSize: 34, color: '#4d4d4e' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ fontSize: 'large', color: '#4d4d4e' }}
                >
                  About
                </Typography>
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="project-link"
          to="/project"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountTreeOutlinedIcon
                sx={{ fontSize: 32, color: '#4d4d4e' }}
              />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ fontSize: 'large', color: '#4d4d4e' }}
                >
                  Projects
                </Typography>
              }
            />
          </ListItemButton>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="contact-link"
          to="/contact"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <EmailOutlinedIcon sx={{ fontSize: 32, color: '#4d4d4e' }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  variant="body2"
                  style={{ fontSize: 'large', color: '#4d4d4e' }}
                >
                  Contact
                </Typography>
              }
            />
          </ListItemButton>
        </NavLink>
      </nav>
    </Box>
  );

  return (
    <div>
      {['bottom'].map((anchor) => (
        <Fragment key={anchor}>
          <FontAwesomeIcon
            onClick={toggleDrawer(anchor, true)}
            icon={faBars}
            color="#4d4d4e"
            size="3x"
            cursor="pointer"
            className="menu-icon"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
