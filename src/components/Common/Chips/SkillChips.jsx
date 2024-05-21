import { Chip, Box } from '@mui/material';
import styled from 'styled-components';
import { useCustomTheme } from '../../../assets/MaterialThemes';

const styles = {
  ChipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    gap: '10px',
    boxSizing: 'border-box',
    margin: '5px 0',
    animation: 'fadeIn 1s .5s backwards',
  },
};

const StyledChip = styled(Chip)(({ theme, backgroundImage }) => ({
  border: '1px solid',
  fontSize: '20px',
  fontWeight: '200',
  '& .MuiChip-label': { fontSize: 10 }, // sub-selector
  fontFamily:
    'Phi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  '&:hover': {
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '20px 20px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center left 12px',
      paddingLeft: '30px',
    }),
    transition: 'all .3s ease-in-out',
    // transform: 'scale(1.1)',
    backgroundColor: theme.palette.secondary.light,
  },
}));

const SkillChips = props => {
  const theme = useCustomTheme();
  return (
    <Box style={styles.ChipContainer}>
      {props.skills.map((item, index) => (
        <StyledChip
          // avatar={<img src={item.icon} alt={'none'} width="20px" />}
          label={item.title}
          variant="outlined"
          key={index}
          backgroundImage={item.avatar}
          // size={'medium'}
          theme={theme}
        />
      ))}
    </Box>
  );
};

export default SkillChips;
