import React, { useState } from 'react';
// Import your game components
import PongGame from '../Common/PongGame/PongGame';
import { Box, Button, Typography } from '@mui/material';
// Assume you have a TicTacToe component, replace with your actual game component
// import TicTacToeGame from '../Common/TicTacToeGame/TicTacToeGame';
let styles = {
  menuText: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily:
      'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
    color: '#333',
    fontSize: '22px',
    fontWeight: '200',
  },
  game: {
    display: 'flex',
    justifyContent: 'center', // Ensure this is enabled for horizontal centering
    alignItems: 'center', // Center the game vertically inside the Box
    height: '100%', // Make sure it takes full height of its parent for effective centering
    width: '250', // Specify the width
    heightGame: '650', // Specify the height for the game specifically
  },
};

export default function GameDrawer() {
  // State to manage which game is displayed
  const [activeGame, setActiveGame] = useState('none'); // 'pong', 'ticTacToe', or 'none'

  // Handlers to switch games
  const openPong = () => setActiveGame('pong');
  const closeGames = () => setActiveGame('none');

  // Function to conditionally render the game based on state
  const renderGame = () => {
    switch (activeGame) {
      case 'pong':
        return (
          <Box style={styles.game}>
            <PongGame
              width={styles.game.width}
              height={styles.game.heightGame}
            />
          </Box>
        );
      case 'ticTacToe':
        return (
          <Box style={styles.game}>
            <PongGame
              width={styles.game.width}
              height={styles.game.heightGame}
            />
          </Box>
        );
      case 'none':
      default:
        return <Typography style={styles.menuText}></Typography>;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="88vh"
      width="100%"
    >
      {activeGame === 'none' && (
        <>
          <Button onClick={openPong}>
            <Typography style={styles.menuText}>Pong</Typography>
          </Button>
        </>
      )}

      {/* Game Display */}
      <Box>{renderGame()}</Box>
    </Box>
  );
}
