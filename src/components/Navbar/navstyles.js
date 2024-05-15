import styled, { keyframes, css } from 'styled-components';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0% {
    transform: scale(1);
    color: #ffffff;
  }
  50% {
    transform: scale(1.08);
    color: rgb(200, 200, 200);
  }
  100% {
    transform: scale(1);
    color: #ffffff;
  }
`;

const pulsatingClass = css`
  animation: ${pulse} 2.5s 4;
`;

// Styled components
export const NavBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.border.main}`,
  width: '100%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.nav,
  justifyContent: 'center',
  marginBottom: '35px',
  zIndex: 1000,
  position: 'fixed',
  top: 0,
}));

export const MobileContainer = styled(Box)({
  width: '90%',
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.link,
  fontWeight: 400,
  fontSize: '16px',
  fontFamily:
    'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  margin: '0 10px',
  '&:hover': {
    transition: 'all 0.5s ease-in-out',
    transform: 'scale(1.08)',
  },
}));

// Apply the pulsating class conditionally
export const PulsatingNavLink = styled(NavLink)`
  &.pulsating-link {
    ${pulsatingClass}
  }
`;

export default PulsatingNavLink;
