import styled from 'styled-components';
import { Link } from '@mui/material';

export const StyledTitle1 = styled(Link)(({ theme }) => ({
  textDecoration: 'none !important',
  fontSize: '60px',
  fontWeight: 200,
  fontFamily:
    'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  margin: '0px',
  color: theme.palette.text.link,
  '&:hover': {
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1.03)',
  },
}));

export const StyledTitle2 = styled(Link)(({ theme }) => ({
  textDecoration: 'none !important',
  fontWeight: 200,
  fontSize: '18px',
  fontFamily:
    'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  margin: '0px',
  color: theme.palette.text.link,
  '&:hover': {
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1.03)',
  },
}));
