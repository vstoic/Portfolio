import styled from 'styled-components';
import { Link } from '@mui/material';

// && overrides the default Link styles
export const StyledLink = styled(Link)`
  && {
    text-align: center;
    margin: 0px 20px 55px 0;
    color: black;
    font-weight: 100;
    font-size: 14px;
    font-family: 'Phi', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    letter-spacing: 1px;
    width: 100%;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      font-weight: 200;
      transform: scale(1.04);
    }

    @media (max-width: 1200px) {
      font-size: 11px;
      text-align: left;
      margin: 0px 0 20px 0; /* Adjust margins for mobile */
    }
  }
`;

