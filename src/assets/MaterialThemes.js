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
      main: '#333333',
    },
    secondary: {
      main: '#4d4d4d',
      light: '#666666',
    },
    background: {
      default: '#333333',
      nav: '#4d4d4d',
    },
    text: {
      primary: '#f5f5f5',
      title: '#f5f5f5',
      secondary: 'rgb(200, 200, 200)',

      link: '#ffffff',
    },
    border: {
      main: '#4d4d4d',
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
      nav: '#ffffff', // Light gray paper
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#666666', // Light gray text
      link: '#000000', // Black link
    },
    border: {
      main: 'rgb(248, 246, 246)', // Black border
      other: '#f5f5f5',
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
