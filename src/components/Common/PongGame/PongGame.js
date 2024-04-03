import React, { useRef, useEffect, useState } from 'react';

const PongGame = () => {
    const canvasRef = useRef(null);
    // Adjusting the initial states to fit the new canvas size
    const [boardWidth] = useState(390);
    const [boardHeight] = useState(600);
    const [player, setPlayer] = useState({ x: 135, y: 580, width: 100, height: 6, velocityX: 45 }); // Adjust player dimensions and position
    const [ball] = useState({ x: boardWidth/2, y: boardHeight/2, width: 8, height: 8, velocityX: 4, velocityY: 3 }); // Adjust ball dimensions and position
    const [score, setScore] = useState(0); // Score state initialized
    const [gameOver, setGameOver] = useState(false); // Game over state initialized
    // const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(to right, #00f260, #0575e6)');
    const gradients = [
            'linear-gradient(to bottom, #3a7bd5, #3a6073)', // Cool Blue
            'linear-gradient(to right, #4ca1af, #c4e0e5)', // Light Blue
            'linear-gradient(to right, #134e5e, #71b280)', // Greenish
            'linear-gradient(to right, #ffafbd, #ffc3a0)', // Pinkish
            'linear-gradient(to right, #ff7e5f, #feb47b)', // Warm Orange
            'linear-gradient(to right, #feb47b, #ff9966)', // Warm Orange to reddish
            'linear-gradient(to right, #ff9966, #ff5e62)', // Reddish
            'linear-gradient(to right, #ff5e62, #ff9966)', // Bloodred
        ];

    // Initial setup for keyboard controls
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext('2d');
    //     canvas.width = boardWidth;
    //     canvas.height = boardHeight;

    //     const keyDownHandler = (e) => {
    //         let newPlayer = { ...player };
    //         if (e.key === "ArrowLeft") {
    //             newPlayer.x = Math.max(newPlayer.x - newPlayer.velocityX, 0);
    //         } else if (e.key === "ArrowRight") {
    //             newPlayer.x = Math.min(newPlayer.x + newPlayer.velocityX, boardWidth - newPlayer.width);
    //         }
    //         setPlayer(newPlayer);
    //     };

    //     window.addEventListener('keydown', keyDownHandler);

    //     return () => window.removeEventListener('keydown', keyDownHandler);
    // }, [player, boardWidth, boardHeight]);


    // Initial setup for mouse and touch controls
    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = boardWidth;
    canvas.height = boardHeight;
    const updatePlayerPosition = (clientX) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width; // Relationship bitmap vs. element for X
        let newX = (clientX - rect.left) * scaleX - player.width / 2; // Adjust mouse position to canvas scale and center paddle
        newX = Math.max(newX, 0); // Prevent the paddle from moving out of the canvas
        newX = Math.min(newX, boardWidth - player.width); // Prevent the paddle from moving out of the canvas
        setPlayer(prevPlayer => ({ ...prevPlayer, x: newX }));
    };
    const mouseMoveHandler = (e) => {
        updatePlayerPosition(e.clientX);
    };
    const touchMoveHandler = (e) => {
        // Prevent the page from scrolling when dragging on canvas
        e.preventDefault(); 
        if (e.touches.length === 1) { // Single touch
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

    // Game logic and rendering
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
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

            if (gameOver) {
                ctx.fillStyle = "transparent";
                ctx.fillRect(0, 0, boardWidth, boardHeight);
                ctx.font = '200 32px Phi, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
                ctx.fillStyle = "lightgrey";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(`${score} Points`, boardWidth / 2, boardHeight / 2);
                return;
            }
            // Update and draw ball
            // Update ball position
            ball.x += ball.velocityX;
            ball.y += ball.velocityY;
            // Draw emoji as ball
            ctx.font = '24px serif'; // You might need to adjust the size
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⚽', ball.x, ball.y); // Use the soccer ball emoji, or choose another
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
                setGameOver(true);
            }
            if (ball.y + ball.height >= player.y && ball.x >= player.x && ball.x <= player.x + player.width) {
                ball.velocityY = -Math.abs(ball.velocityY * 1.15);
                // ball.velocityY = -Math.abs(ball.velocityY * 2.15);
                // setBackgroundGradient('linear-gradient(to right, #e55d87, #5fc3e4)');
                setScore(score + 1);
            }
            // Draw player
            ctx.fillStyle = 'black'; // Set player color
            ctx.fillRect(player.x, player.y, player.width, player.height);
            // Draw score
            ctx.font = '200 32px Phi,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif';
            ctx.fillStyle = 'lightgrey';
            ctx.fillText(`${score}`, boardWidth/2 , boardHeight/2); // Position the score at the top left corner
            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [player, ball, gameOver, boardWidth, boardHeight, score, gradients]);

    return <canvas ref={canvasRef} />;
};

export default PongGame;
