import { Chip, Box } from '@mui/material';

const styles = {
  ChipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '10px',
    boxSize: 'border-box',
    margin: '5px 0',
    animation: 'fadeIn 1s .5s backwards',
  },
};

const SkillChips = (props) => {
  return (
    <Box style={styles.ChipContainer}>
      {props.skills.map((item, index) => (
        <Chip
          // avatar={<img src={item.icon} alt={'none'} width="20px" />}
          label={item.title}
          variant="outlined"
          key={index}
          size="small"
          sx={{ 
            color: '#333', 
            border: '.5px solid #333',
            fontSize: '14px',
            fontWeight: '200',
            fontFamily: 'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          }}
        />
      ))}
    </Box>
  );
};

export default SkillChips;
