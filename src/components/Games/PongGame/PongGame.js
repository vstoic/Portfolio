import { Button } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

const PongGame = ({ width, height }) => {
  const canvasRef = useRef(null);
  // Adjusting the initial states to fit the new canvas size
  const [boardWidth, setBoardWidth] = useState(width || 250); // Default width
  const [boardHeight, setBoardHeight] = useState(height || 650); // Default height
  const [player, setPlayer] = useState({
    x: 135,
    y: 620,
    width: boardWidth / 2.4,
    height: 17,
    velocityX: 45,
  }); // Adjust player dimensions and position
  const [ball, setBall] = useState({
    x: boardWidth / 2,
    y: boardHeight / 2,
    width: 15,
    height: 15,
    velocityX: 5,
    velocityY: 4,
  }); // Adjust ball dimensions and position
  const [score, setScore] = useState(0); // Score state initialized
  const [topScore, setTopScore] = useState(
    parseInt(localStorage.getItem('topScore') || '0', 10)
  );
  const [gameOver, setGameOver] = useState(false); // Game over state initialized
  const emojis = useRef([]);
  const gradients = [
    'linear-gradient(to right, #3a7bd5, #3a6073)', // Cool Blue
    'linear-gradient(to right, #4ca1af, #134e5e)', // Light Blue
    'linear-gradient(to right, #134e5e, #71b280)', // Greenish
    'linear-gradient(to right, #ffafbd, #ffc3a0)', // Pinkish
    'linear-gradient(to right, #ff7e5f, #feb47b)', // Warm Orange
    'linear-gradient(to right, #feb47b, #ff9966)', // Warm Orange to reddish
    'linear-gradient(to right, #ff9966, #ff5e62)', // Reddish
    'linear-gradient(to right, #ff5e62, #ff9966)', // Bloodred
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Ensure canvas dimensions are initially set to match state
    canvas.width = boardWidth;
    canvas.height = boardHeight;

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Use the bounding box of the parent element
        const { width, height } = entry.contentRect;
        setBoardWidth(width);
        setBoardHeight(height);
      }
    });

    const parentElement = canvas.parentNode;
    resizeObserver.observe(parentElement);

    return () => resizeObserver.unobserve(parentElement);
  }, []);

  const updateTopScore = currentScore => {
    if (currentScore > topScore) {
      localStorage.setItem('topScore', currentScore.toString());
      setTopScore(currentScore);
      return true;
    }
    return false;
  };

  const resetGame = () => {
    // Reset score
    setScore(0);

    // Reset ball position and velocity
    setBall({
      x: boardWidth / 2,
      y: boardHeight / 2,
      width: 15,
      height: 15,
      velocityX: 5,
      velocityY: 4,
    });

    // Reset player position
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      x: boardWidth / 2 - 50, // Assuming the initial x position is centered
      y: boardHeight - 10, // Assuming a 10px margin from the bottom
    }));

    // Set gameOver to false to restart the game
    setGameOver(false);
  };

  // Initial setup for mouse and touch controls
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    const updatePlayerPosition = clientX => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width; // Relationship bitmap vs. element for X
      let newX = (clientX - rect.left) * scaleX - player.width / 2; // Adjust mouse position to canvas scale and center paddle
      newX = Math.max(newX, 0); // Prevent the paddle from moving out of the canvas
      newX = Math.min(newX, boardWidth - player.width); // Prevent the paddle from moving out of the canvas
      setPlayer(prevPlayer => ({ ...prevPlayer, x: newX }));
    };
    const mouseMoveHandler = e => {
      updatePlayerPosition(e.clientX);
    };
    const touchMoveHandler = e => {
      // Prevent the page from scrolling when dragging on canvas
      e.preventDefault();
      if (e.touches.length === 1) {
        // Single touch
        updatePlayerPosition(e.touches[0].clientX);
      }
    };
    canvas.addEventListener('mousemove', mouseMoveHandler);
    canvas.addEventListener('touchmove', touchMoveHandler, { passive: false });
    return () => {
      canvas.removeEventListener('mousemove', mouseMoveHandler);
      canvas.removeEventListener('touchmove', touchMoveHandler);
    };
  }, [player.width, boardWidth, boardHeight]); // Removed player dependency to avoid re-binding event listeners on player state update

  // Initialize falling emojis when the game ends
  useEffect(() => {
    if (gameOver) {
      // Create 8 emojis with random positions and zero initial velocity
      emojis.current = new Array(8).fill(null).map(() => ({
        x: Math.random() * boardWidth,
        y: Math.random() * 50, // Start from the top
        velocityY: 12,
        emoji: '⚽', // This can be randomized or different for each
        size: Math.random() * 60 + 10, // Sizes between 10 and 30
      }));
    }
  }, [gameOver, boardWidth]);

  // Game logic and rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rotation = 0;
    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, boardWidth, boardHeight);
      const gradientIndex = Math.floor(score / 3) % gradients.length;
      const gradient = ctx.createLinearGradient(0, 0, boardWidth, 0);
      const colors = gradients[gradientIndex].match(/#([a-f\d]{6})/gi); // Extract colors from the gradient string
      gradient.addColorStop(0, colors[0]);
      gradient.addColorStop(1, colors[1]);
      // Set the gradient as the background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, boardWidth, boardHeight); // Fill background

      // Draw HI Score
      ctx.font =
        '200 22px Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'right'; // Align text to the right
      ctx.textBaseline = 'top'; // Align text to the top
      ctx.fillText(`HI ${topScore}`, boardWidth - 10, 10);

      if (gameOver) {
        // Draw game over screen
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, boardWidth, boardHeight);
        ctx.font =
          '200 32px Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const isNewTopScore = updateTopScore(score);
        const message = isNewTopScore
          ? `New high score: ${score}!`
          : `${score} Points`;
        ctx.fillText(message, boardWidth / 2, boardHeight / 2);

        // Draw falling emojis
        emojis.current.forEach((emoji, index) => {
          // Apply gravity
          emoji.velocityY += 0.2 + emoji.size / 50; // Larger emojis fall slightly faster
          emoji.y += emoji.velocityY;
          // Collision with the bottom of the canvas
          if (emoji.y + emoji.size / 2 >= boardHeight) {
            emoji.y = boardHeight - emoji.size / 2;
            emoji.velocityY = -emoji.velocityY / 1.4;
          }

          // Draw emoji
          ctx.font = `${emoji.size}px serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(emoji.emoji, emoji.x, emoji.y);
        });
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // draw ball
      ball.x += ball.velocityX;
      ball.y += ball.velocityY;
      // Before drawing the emoji, save the current context state
      ctx.save();
      // Move the rotation center to the ball's position
      ctx.translate(ball.x, ball.y);
      // Rotate the canvas context
      ctx.rotate(rotation);
      // Draw the emoji centered on the new origin
      ctx.font = '26px serif'; // Adjust size as needed
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('⚽', 0, 0); // Draw at the origin, which has been translated to the ball's position
      // Restore the canvas context to its original state
      ctx.restore();
      rotation += 0.1; // Adjust this to control the spin speed

      // Collision with the walls
      if (ball.y <= 0) {
        // Top wall
        ball.velocityY *= -1;
      }
      if (ball.x <= 0 || ball.x + ball.width >= canvas.width) {
        // Left and right walls
        ball.velocityX *= -1;
      }
      // Collision with the bottom wall (below which is game over)
      if (ball.y + ball.height >= canvas.height) {
        // Game over logic
        setGameOver(true);
      }
      if (
        ball.y + ball.height >= player.y &&
        ball.x >= player.x &&
        ball.x <= player.x + player.width
      ) {
        ball.velocityY = -Math.abs(ball.velocityY * 1.1);
        setScore(score + 1);
      }

      // Draw player
      ctx.fillStyle = 'black'; // Set player color
      ctx.fillRect(player.x, player.y, player.width, player.height);

      // Draw score
      ctx.font =
        '200 96px Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center'; // Center horizontally
      ctx.textBaseline = 'middle'; // Center vertically
      ctx.fillText(`${score}`, boardWidth / 2, boardHeight / 2); // Position the score at the top left corner
      animationFrameId = window.requestAnimationFrame(draw);
    };
    draw();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [
    player,
    ball,
    gameOver,
    boardWidth,
    boardHeight,
    score,
    gradients,
    topScore,
    emojis,
    updateTopScore,
  ]);

  return (
    <>
      <canvas ref={canvasRef} width={boardWidth} height={boardHeight} />
      {gameOver && (
        <Button
          onClick={resetGame}
          style={{
            backgroundColor: 'black',
            color: 'white',
            position: 'absolute',
            padding: '10px 20px',
            fontFamily:
              'Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif',
            fontSize: '16px',
            fontWeight: '200',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          ↺ Play Again
        </Button>
      )}
    </>
  );
};

export default PongGame;
