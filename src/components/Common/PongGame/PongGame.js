import React, { useRef, useEffect, useState } from 'react';

const PongGame = () => {
    const canvasRef = useRef(null);
    // Adjusting the initial states to fit the new canvas size
    const [boardWidth] = useState(340);
    const [boardHeight] = useState(600);
    const [player, setPlayer] = useState({ x: 135, y: 580, width: 90, height: 5, velocityX: 45 }); // Adjust player dimensions and position
    const [ball, setBall] = useState({ x: boardWidth/2, y: boardHeight/2, width: 10, height: 10, velocityX: 4, velocityY: 3 }); // Adjust ball dimensions and position


    const [score, setScore] = useState(0); // Score state initialized
    const [gameOver, setGame] = useState(false); // Game over state initialized

    // Initial setup
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = boardWidth;
        canvas.height = boardHeight;

        const keyDownHandler = (e) => {
            let newPlayer = { ...player };
            if (e.key === "ArrowLeft") {
                newPlayer.x = Math.max(newPlayer.x - newPlayer.velocityX, 0);
            } else if (e.key === "ArrowRight") {
                newPlayer.x = Math.min(newPlayer.x + newPlayer.velocityX, boardWidth - newPlayer.width);
            }
            setPlayer(newPlayer);
        };

        window.addEventListener('keydown', keyDownHandler);

        return () => window.removeEventListener('keydown', keyDownHandler);
    }, [player, boardWidth, boardHeight]);

    // Game logic and rendering
    useEffect(() => {
        if (gameOver) {
            // ctx.fillStyle = "black";
            // ctx.fillRect(0, 0, canvas.width, canvas.height);
            // ctx.font = "20px sans-serif";
            // ctx.fillStyle = "white";
            // ctx.fillText("Game Over: Press 'Space' to Restart", 50, canvas.height / 2);
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const draw = () => {
            ctx.clearRect(0, 0, boardWidth, boardHeight);
            ctx.fillStyle = 'black'; // Set background color
            ctx.fillRect(0, 0, boardWidth, boardHeight); // Fill background

            // Update and draw ball
            ctx.fillStyle = "white";
            ball.x += ball.velocityX;
            ball.y += ball.velocityY;
            ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
            // Collision with the walls
            if (ball.y <= 0) { // Top wall
                ball.velocityY *= -1;
            }
            if (ball.x <= 0 || (ball.x + ball.width >= canvas.width)) { // Left and right walls
                ball.velocityX *= -1;
            }
            // Collision with the bottom wall (below which is game over)
            if (ball.y + ball.height >= canvas.height) {
                // Game over logic
                setGame(true); // Consider using a state setter if `gameOver` is a state
            }
            if (ball.y + ball.height >= player.y && ball.x >= player.x && ball.x <= player.x + player.width) {
                ball.velocityY = -Math.abs(ball.velocityY * 1.2);
                setScore(score + 1);
            }
            // Draw player
            ctx.fillStyle = 'white'; // Set player color
            ctx.fillRect(player.x, player.y, player.width, player.height);

            // Draw score
            ctx.font = '16px sans-serif';
            ctx.fillStyle = 'white';
            ctx.fillText(`Score: ${score}`, 10, 20); // Position the score at the top left corner


            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [player, ball, gameOver, boardWidth, boardHeight]);

    return <canvas ref={canvasRef} />;
};

export default PongGame;
