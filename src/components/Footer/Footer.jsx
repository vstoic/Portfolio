import { Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { StyledLink } from './FooterStyle';
import { Link as RouterLink } from 'react-router-dom';
import { useCustomTheme } from '../../assets/MaterialThemes';

export default function Footer() {
  const theme = useCustomTheme();
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '100%', sm: '100%', md: 'none', lg: 'none' },
        // margin: '0 auto', // Centers the footer horizontally
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '80px',
        marginBottom: '25px',
        padding: { xs: '0 20px', sm: '0 20px', md: '0 0', lg: '0 0' },
      }}
    >
      <Divider variant="fullWidth" sx={{ marginBottom: '20px' }} />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'column',
            lg: 'row',
          },
          justifyContent: 'space-between',
        }}
      >
        <StyledLink
          // target="_blank"
          // rel="noopener noreferrer"
          component={RouterLink}
          to="/"
          theme={theme}
        >
          SingVictorCheng@gmail.com
        </StyledLink>
        <StyledLink
          theme={theme}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victorcheng3"
        >
          LinkedIn
        </StyledLink>
        <StyledLink
          theme={theme}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/vstoic/vstoic.github.io"
        >
          Github
        </StyledLink>
        <StyledLink
          theme={theme}
          target="_blank"
          rel="noopener noreferrer"
          href="https://letterboxd.com/vstoic/"
        >
          Letterboxd
        </StyledLink>
        <StyledLink
          theme={theme}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.strava.com/athletes/3299755"
        >
          Strava
        </StyledLink>
        <StyledLink
          theme={theme}
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/memoir.log"
        >
          Instagram
        </StyledLink>
      </Box>
      <Box>
        <Typography
          sx={{
            // color: '#4d4d4ec3',
            fontWeight: '100',
            fontSize: '14px',
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
            margin: '10px 30px 55px 0px',
            fontFamily: `Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
            letterSpacing: '1px',
          }}
        >
          2023 • Built by Victor Cheng
        </Typography>
      </Box>
    </Box>
  );
}
