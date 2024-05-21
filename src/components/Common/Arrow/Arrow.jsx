import { Typography, Box } from '@mui/material';
import Arrow from '../../../assets/images/gif-bounce-arrow.gif';
const styles = {
  bounceContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px auto 0px',
    textAlign: 'center',
  },
  bounceText: {
    fontWeight: '200',
    fontSize: '18px',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
    animation: 'fadeIn 1s .5s backwards',
  },
  bounceImg: {
    width: '45px',
    height: 'auto',
    marginTop: '-10px',
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
