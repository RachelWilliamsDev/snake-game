import React, { useEffect, useState } from "react";
import Snake from "./Snake";

function GameBoard() {
  const [snake, setSnake] = useState([
    { x: 5, y: 5 },
    { x: 6, y: 5 },
    { x: 7, y: 5 },
  ]);
  const [direction, setDirection] = useState("RIGHT");
  const gridSize = 20;

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

    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") {
        if (direction !== "DOWN") setDirection("UP");
      }
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") {
        if (direction !== "UP") setDirection("DOWN");
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        if (direction !== "RIGHT") setDirection("LEFT");
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        if (direction !== "LEFT") setDirection("RIGHT");
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    const interval = setInterval(() => {
      moveSnake();
    }, 200);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [direction]);

  return (
    <div className="relative grid grid-cols-20 grid-rows-20 gap-0 border border-blue-600">
      {Array.from({ length: gridSize * gridSize }).map((_, index) => (
        <div
          key={index}
          className="bg-blue-200 border border-blue-600 w-4 h-4"
        ></div>
      ))}
      <Snake snake={snake} />
    </div>
  );
}

export default GameBoard;
