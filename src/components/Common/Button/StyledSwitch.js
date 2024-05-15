import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import NightlightIcon from '@mui/icons-material/Nightlight';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}"><path d="M6.995 12c0-2.761 2.247-5.007 5.007-5.007a5.007 5.007 0 010 10.014A5.007 5.007 0 016.995 12zm5.01-6.993a1 1 0 110-2 1 1 0 010 2zm0 16.002a1 1 0 110-2 1 1 0 010 2zm9-10.007a1 1 0 110-2 1 1 0 010 2zm-18.01 0a1 1 0 110-2 1 1 0 010 2zm15.137-5.157a1 1 0 110-1.415 1 1 0 010 1.415zm-12.273 0a1 1 0 110-1.415 1 1 0 010 1.415zm12.273 12.275a1 1 0 110-1.414 1 1 0 010 1.414zm-12.273 0a1 1 0 110-1.414 1 1 0 010 1.414z"/></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default StyledSwitch;
