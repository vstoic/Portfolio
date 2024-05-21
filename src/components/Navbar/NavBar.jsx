// import './mobileSideBar.scss';
import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import { useMediaQuery } from '@mui/material';
// import Sing_Cheng_Resume from '../../assets/Sing_Cheng_Resume.pdf';
import { Link as RouterLink } from 'react-router-dom';
//icons
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GameDrawer from '../Games/GameDrawer';
import { useCustomTheme } from '../../assets/MaterialThemes';
import ThemeToggleButton from '../Common/Button/ThemeToggleButton';
import PulsatingNavLink, {
  NavBox,
  MobileContainer,
  NavLink,
} from './navstyles';

export default function NavBar() {
  const theme = useCustomTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('md'));

  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
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
      <Box
        sx={{
          width: mobileView ? '100vw' : '40vw', // Adjust the width based on mobileView
        }}
      >
        <Box onClick={event => event.stopPropagation()}>
          <GameDrawer />
        </Box>
        {/* --------------------------this is icon links --------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <a
            exact="true"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vstoic/vstoic.github.io"
            style={{
              textDecoration: 'none',
              width: '100%',
            }}
          >
            <ListItemButton sx={{ justifyContent: 'center' }}>
              <GitHubIcon
                sx={{ fontSize: 35, color: theme.palette.text.primary }}
              />
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
              <LinkedInIcon
                sx={{ fontSize: 40, color: '#0077B5', padding: 0 }}
              />
            </ListItemButton>
          </a>
        </Box>
        {/* --------------------------this is icon links--------------------- */}
      </Box>
    </Box>
  );

  return (
    <NavBox theme={theme}>
      <MobileContainer>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {['right'].map(anchor => (
            <Fragment key={anchor}>
              <Box></Box>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NavLink component={RouterLink} to="/" theme={theme}>
                  Home
                </NavLink>
                <PulsatingNavLink
                  component={RouterLink}
                  to="/about"
                  theme={theme}
                >
                  About
                </PulsatingNavLink>
                <ThemeToggleButton />
                {/* <Link
              href={Sing_Cheng_Resume}
              download="Sing_Cheng_Resume"
              className="nav-links"
            >
              Resume
            </Link> */}
                {!mobileView && (
                  <DragHandleSharpIcon
                    onClick={toggleDrawer(anchor, true)}
                    sx={{
                      fontSize: {
                        xs: 30,
                        sm: 30,
                        md: 22,
                        lg: 22,
                        xl: 22,
                      },
                      cursor: 'pointer',
                      margin: '0 8px',
                      '&:hover': {
                        fontSize: {
                          xs: 34,
                          sm: 34,
                          md: 26,
                          lg: 26,
                          xl: 26,
                        },
                        transition: 'all 0.2s ease-in-out',
                      },
                    }}
                  />
                )}
              </Box>
            </Fragment>
          ))}
        </Box>
      </MobileContainer>
    </NavBox>
  );
}
