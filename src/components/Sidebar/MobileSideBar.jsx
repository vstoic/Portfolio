// import './mobileSideBar.scss';
import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import Sing_Cheng_Resume from '../../assets/Sing_Cheng_Resume.pdf';
import { Link as RouterLink } from 'react-router-dom';
//icons
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

let styles = {
  menuText: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
    color: '#333',
    fontSize: '22px',
    fontWeight: '200',
  },
};

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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ width: '25vw' }}>
        <NavLink
          exact="true"
          to="/"
          className="drawer-text"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemText
              disableTypography
              primary={<Typography style={styles.menuText}>Home</Typography>}
            />
          </ListItemButton>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="about-link"
          to="/about"
          className="drawer-text"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemText
              disableTypography
              primary={<Typography style={styles.menuText}>About</Typography>}
            />
          </ListItemButton>
        </NavLink>
        {/* <NavLink
          exact="true"
          activeclassname="contact-link"
          to="/contact"
          style={{ textDecoration: 'none' }}
        >
          <ListItemButton>
            <ListItemText
              disableTypography
              primary={<Typography style={styles.menuText}>Contact</Typography>}
            />
          </ListItemButton>
        </NavLink> */}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <a
          exact="true"
          // activeclassname="about-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vstoic/vstoic.github.io"
          style={{
            textDecoration: 'none',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ justifyContent: 'center' }}>
            <GitHubIcon sx={{ fontSize: 55, color: '#333' }} />
          </ListItemButton>
        </a>
        <a
          exact="true"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victorcheng3/"
          style={{
            textDecoration: 'none',
            width: '100%',
          }}
        >
          <ListItemButton sx={{ justifyContent: 'center' }}>
            <LinkedInIcon sx={{ fontSize: 60, color: '#0077B5', padding: 0 }} />
          </ListItemButton>
        </a>
      </Box>
    </Box>
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <Box></Box>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>

          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Link component={RouterLink} to="/" className="nav-links">
              Home
            </Link>
            <Link component={RouterLink} to="/about" className="nav-links">
              About
            </Link>
            {/* <Link
              href={Sing_Cheng_Resume}
              download="Sing_Cheng_Resume"
              className="nav-links"
            >
              Resume
            </Link> */}
            <DragHandleSharpIcon
              onClick={toggleDrawer(anchor, true)}
              sx={{
                fontSize: { xs: 30, sm: 30, md: 22, lg: 22, xl: 22},
                color: '#333',
                cursor: 'pointer',
                margin: '0 8px',
                '&:hover': {
                  fontSize: { xs: 34, sm: 34, md: 26, lg: 26, xl: 26},
                  transition: 'all 0.2s ease-in-out',
                },
              }}
            />
          </Box>
        </Fragment>
      ))}
    </div>
  );
}
