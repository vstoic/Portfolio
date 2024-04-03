import { Typography, Box } from '@mui/material';
import Arrow from '../../../assets/images/gif-bounce-arrow.gif';

const styles = {
  bounceContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: '70px',
    margin: '40px auto 0px', // Center horizontally
    textAlign: 'center', // Center the content within the container
  },
  bounceText: {
    color: '#333',
    fontWeight: '200',
    fontSize: '18px',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
    // letterSpacing: '1.5px',
    animation: 'fadeIn 1s .5s backwards',
  },
  bounceImg: {
    width: '50px',
    height: 'auto',
    opacity: '0.4',
    marginTop: '-10px',
    // animation: 'bounce 2s infinite',
  },
};

const FloatingArrow = props => {
  return (
    <Box style={styles.bounceContainer}>
      <Typography style={styles.bounceText}> {props.text}</Typography>
      <img src={Arrow} style={styles.bounceImg} />
    </Box>
  );
};

export default FloatingArrow;
