// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { useTheme } from '@mui/material';

const ThemeContext = createContext();

export const useCustomTheme = () => {
  const theme = useTheme();
  return theme;
};

export const useThemeContext = () => useContext(ThemeContext);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff', // White
    },
    secondary: {
      main: '#666666', // Light gray
    },
    background: {
      default: '#000000', // Black background
      paper: '#333333', // Dark gray paper
    },
    text: {
      primary: '#ffffff', // White text
      secondary: '#666666', // Light gray text
    },
    header: {
      background: '#ffffff', // Black header background
      text: '#ffffff', // White header text
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#666666', // Light gray
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f0f0f0', // Light gray paper
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Light gray text
    },
  },
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
