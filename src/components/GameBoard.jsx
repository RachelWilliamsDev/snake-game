import React, { useEffect, useState } from "react";
import Snake from "./Snake";
import StartGameButton from "./StartGameButton";
import CountdownTimer from "./CountdownTimer";

function GameBoard() {
  const [snake, setSnake] = useState([
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
  ]);
  const [direction, setDirection] = useState("RIGHT");
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const gridSize = 20;

  const startGame = () => {
    setIsGameStarted(true);
    setCountdown(3);
  };

  useEffect(() => {
    const moveSnake = () => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const snakeHead = newSnake[0];
        let newSnakeHead;

        switch (direction) {
          case "UP":
            newSnakeHead = { x: snakeHead.x, y: snakeHead.y - 1 };
            break;
          case "DOWN":
            newSnakeHead = { x: snakeHead.x, y: snakeHead.y + 1 };
            break;
          case "LEFT":
            newSnakeHead = { x: snakeHead.x - 1, y: snakeHead.y };
            break;
          case "RIGHT":
            newSnakeHead = { x: snakeHead.x + 1, y: snakeHead.y };
            break;
          default:
            newSnakeHead = snakeHead;
        }

        if (newSnakeHead.x >= gridSize) newSnakeHead.x = 0;
        if (newSnakeHead.x < 0) newSnakeHead.x = gridSize - 1;
        if (newSnakeHead.y >= gridSize) newSnakeHead.y = 0;
        if (newSnakeHead.y < 0) newSnakeHead.y = gridSize - 1;

        const updatedSnake = [newSnakeHead, ...newSnake.slice(0, -1)];

        return updatedSnake;
      });
    };

    if (isGameStarted && countdown === 0) {
      const handleKeyPress = (e) => {
        if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
        if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
        if (e.key === "ArrowLeft" && direction !== "RIGHT")
          setDirection("LEFT");
        if (e.key === "ArrowRight" && direction !== "LEFT")
          setDirection("RIGHT");
      };

      document.addEventListener("keydown", handleKeyPress);

      const interval = setInterval(() => {
        moveSnake();
      }, 200);

      return () => {
        clearInterval(interval);
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [direction, countdown, isGameStarted]);

  useEffect(() => {
    if (countdown > 0 && isGameStarted) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown, isGameStarted]);

  return (
    <div className="relative grid grid-cols-20 grid-rows-20 gap-0 border border-blue-600">
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div
          key={index}
          className="bg-blue-200 border border-blue-600 w-4 h-4"
        ></div>
      ))}

      {!isGameStarted && <StartGameButton onStartGame={startGame} />}
      {isGameStarted && countdown > 0 && (
        <CountdownTimer countdown={countdown} />
      )}
      {isGameStarted && countdown === 0 && <Snake snake={snake} />}
    </div>
  );
}

export default GameBoard;
