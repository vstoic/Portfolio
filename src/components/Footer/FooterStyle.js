import styled from 'styled-components';
import { Link } from '@mui/material';

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none !important',
  textAlign: 'center',
  margin: '0px 20px 5px 0',
  color: theme.palette.text.link,
  fontWeight: 100,
  fontSize: '14px',
  fontFamily:
    'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  letterSpacing: '1px',
  width: '100%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    fontWeight: 200,
    transform: 'scale(1.04)',
  },
  '@media (max-width: 1200px)': {
    color: theme.palette.text.link,
    fontSize: '14px',
    textAlign: 'left',
    margin: '0px 0px 20px 10%', // Adjust margins for mobile
  },
}));
