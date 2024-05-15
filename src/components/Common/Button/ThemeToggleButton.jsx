import StyledSwitch from './StyledSwitch';
import { useThemeContext } from '../../../assets/MaterialThemes';

const ThemeToggleButton = () => {
  const { toggleTheme, themeMode } = useThemeContext();
  return (
    <StyledSwitch onClick={toggleTheme}>
      {themeMode === 'light' ? 'Light' : 'Dark'} Theme
    </StyledSwitch>
  );
};

export default ThemeToggleButton;
